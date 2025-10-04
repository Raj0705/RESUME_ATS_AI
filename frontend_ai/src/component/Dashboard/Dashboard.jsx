import React from 'react'
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import skeleton from '@mui/material/Skeleton';
import Skeleton from '@mui/material/Skeleton';
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const Dashboard = () => {
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
                        Upload Your Resume
                    </div>

                    <div className={styles.DashboardInputField}>
                        <label htmlFor='inputField' className={styles.analyzeAIBtn}>Upload Resume</label>
                        <input type='file' accept=".pdf" id='inputField' />
                    </div>
                </div>
                <div className={styles.jobDesc}>
                    <textarea className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50} />
                    <div className={styles.AnalyzeBtn}>Analyze</div>
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
