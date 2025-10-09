const ResumeModel = require('../Models/resume');
const multer = require("multer");
const pdfParse = require("pdf-parse");
const path = require("path");
const {CohereClient} = require("cohere-ai");

const cohere = new CohereClient({
    token: "MChyvVh8zryh99ZWQcHxgFAZWCbwqO1OSDXixgsO",
})




exports.addResume = async(req,res)=>{
    try{
        const {job_desc, user} = req.body;
        // console.log(req.file);
        // console.log(job_desc,user);

        const pdfBuffer = req.file.buffer || null;
        const pdfPath = req.file.path;
        const fs = require("fs");
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);
        

        const prompt =`
              You are a resume screening assistant.
              Compare the followig resume text with the provided Job DEscription (JD) and give a match score (0-100) and fomate
              
              Resume:
              ${pdfData.text}
              
              Job Description:
              ${job_desc}
              `
              ;

              const response = await cohere.chat({
                model: "command",
                prompt: prompt,
              max_token: 100,
              temperaturee: 0.7,
              });

              let result = response.generations[0].text;
              console.log(result)

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Server error', message: err.message});
    }
}