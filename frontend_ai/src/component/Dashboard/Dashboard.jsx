import React, { useContext } from 'react'
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import skeleton from '@mui/material/Skeleton';
import Skeleton from '@mui/material/Skeleton';
import withAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios'
import { useState } from 'react';
import { AuthContext } from '../../utils/AuthContext';

    


const Dashboard = () => {
    const [uploadFileText, setUploadFileText] = useState("Upload your resume");
    const[loading , setLoading] = useState(false);
    const[resumeFile, setResumeFile] = useState(null);
    const[jobDesc, setJobDesc] = useState("");


    const [result,setResult] = useState(null);

    const {userInfo} = useContext(AuthContext)

    const handleOnChangeFile = (e) =>{
        const file = e.target.files[0];
  setResumeFile(file);
  setUploadFileText(file ? file.name : "Upload your resume");
    }

    const handleUpload = async()=>{
        setResult(null)
        if(!jobDesc || !resumeFile){
            alert("Please fill Job Description & Upload Resume");
            return;
        }

        const formData = new FormData();
        formData.append("resume",resumeFile);
        formData.append("job_desc",jobDesc);
        formData.append("user",userInfo._id);

        try{
            const result =await axios.post('/api/resume/addResume',formData);
            console.log(result)
        }catch(err){
            console.log(err)
        }

    }
    return (
        <div className={styles.Dashboard}>
            <div className={styles.DashboardLeft}>
                <div className={styles.DashboardHeader}>
                    <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
                    <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
                </div>

                <div className={styles.alertInfo}>
                    <div>🔔 Important Instruction:</div>
                    <div className={styles.dashboardInstructions}>
                        <div>👨‍💻 Please paste the complete job description in the "Job Description" field before submitting.</div>
                        <div>📎 Only PDF format (.pdf) resumes are accepted.</div>
                    </div>
                </div>

                <div className={styles.DashboardUploadResume}>
                    <div className={styles.DashboardResumeBlock}>
                        {uploadFileText}
                    </div>

                    <div className={styles.DashboardInputField}>
                        <label htmlFor='inputField' className={styles.analyzeAIBtn}>Upload Resume</label>
                        <input type='file' accept=".pdf" id='inputField' onChange={handleOnChangeFile}/>
                    </div>
                </div>
                <div className={styles.jobDesc}>
                    <textarea value = {jobDesc} onChange={(e)=>{setJobDesc(e.target.value)}} className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50} />
                    <div className={styles.AnalyzeBtn} onClick={handleUpload}>Analyze</div>
                </div>
            </div>
            <div className={styles.DashboardRight}>
                <div className={styles.DashboardRightTopCard}>
                    <div>Analyze With AI</div>
                    <img className={styles.profileImg} src={"https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png" }/> 
                    <h2>Raj Srivastav</h2>
                </div>
              { /*  <div className={styles.DashboardRightTopCard}>
                    <div>Result</div>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center",gap:20}}>
                    <h1>75%</h1>
                     <CreditScoreIcon sx={{fontSize:22}} />
                    </div>
                    <div className={styles.feedback}>
                        <h3>Feedback</h3>
                        <p>Your resume is well-structured and highlights relevant skills. However, consider adding more specific achievements to demonstrate your impact in previous roles.</p>
                </div>
                </div> 
                */}
            <Skeleton variant="rectangular" sx={{borderRadius:"20px"}} width={230} height={280} />
                
               
            </div>
        </div>
    )
}

export default withAuthHOC(Dashboard)
