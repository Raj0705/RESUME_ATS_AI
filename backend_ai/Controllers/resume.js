const ResumeModel = require('../Models/resume');
const pdfParse = require("pdf-parse");
const fs = require("fs");
const { CohereClient } = require("cohere-ai");
const { error } = require('console');
require("dotenv").config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY || "bBzDxxLpzh6WZGS7fMvV41Mf88Q3mabjJeupmnEy"
});

exports.addResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }

    // Read PDF
    const pdfPath = req.file.path;
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(dataBuffer);

    // Prepare message for Cohere
    const message = `
      You are a resume screening assistant.
      Compare the following resume text with the provided Job Description (JD) and:
      1. Give a match score (0–100).
      2. Explain key strengths and weaknesses.
      3. Suggest 3 improvements for better ATS match.

      Resume:
      ${pdfData.text}

      Job Description:
      ${job_desc}
    `;

    // Call Cohere API
    const response = await cohere.chat({
      model: "command-a-vision-07-2025",
      message,
      temperature: 0.7,
    });

    const resultText = response.text;

    // Extract ATS score
    const scoreMatch = resultText.match(/Match Score:\s*(\d+)/i);
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;

    // Extract sections
    const strengthsMatch = resultText.match(/Key Strengths:[\s\S]*?(?=Key Weaknesses:|$)/i);
    const weaknessesMatch = resultText.match(/Key Weaknesses:[\s\S]*?(?=Improvements for|$)/i);
    const improvementsMatch = resultText.match(/Improvements for Better ATS Match:[\s\S]*/i);

    const strengths = strengthsMatch ? strengthsMatch[0].trim() : "Not found";
    const weaknesses = weaknessesMatch ? weaknessesMatch[0].trim() : "Not found";
    const improvements = improvementsMatch ? improvementsMatch[0].trim() : "Not found";

    // Combine all feedback text
    const feedback = `
ATS Match Score: ${score || "N/A"}

${strengths}

${weaknesses}

${improvements}
    `.trim();

    // Save in MongoDB
    const newResume = await ResumeModel.create({
      user,
      job_desc,
      resume_name: req.file.originalname,
      resume_text: pdfData.text,
      match_score: score,
      feedback,
    });

    // Delete uploaded PDF
    fs.unlinkSync(pdfPath);

    // ✅ Clean final response (NO DUPLICATE feedback)
    res.status(200).json({
      success: true,
      message: "Resume analysis completed",
      ats_score: score,
      data: newResume // feedback only here
    });

  } catch (err) {
    console.error("Error in addResume:", err);

    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      error: 'Server error',
      message: err.message,
    });
  }
};


exports.getAllResumeForUser = async (req, res) => {
  try {
    const { user } = req.params;
    const resumes = await ResumeModel.find({ user }).sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Your Previous History",
      resumes: resumes,
    });
  } catch (err) {
    console.error("Error in getAllResumeForUser:", err);
    return res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

exports.getResumeForAdmin = async (req, res) => {
  try {
    const resumes = await ResumeModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Fetched All History",
      resumes: resumes,
    });
  } catch (err) {
    console.error("Error in getResumeForAdmin:", err);
    return res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};
