import React from 'react'
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton';
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const admin = () => {
  return (
    <div className={styles.Admin}>
    <div className={styles.AdminBlock}>

      <Skeleton variant="rectangular" 
      sx={{borderRadius:"20px"}} 
      width={266}  
      height={500} />
      
        <div className={styles.AdminCard}>
        <h2>Raj Srivastav</h2>
        <p style={{color: "blue"}}>raj@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia accusamus voluptate harum dicta eaque voluptatum vel repellendus ratione laboriosam!</p>

      </div>
       
       <div className={styles.AdminCard}>
        <h2>Raj Srivastav</h2>
        <p style={{color: "blue"}}>raj@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia accusamus voluptate harum dicta eaque voluptatum vel repellendus ratione laboriosam!</p>

      </div>

       <div className={styles.AdminCard}>
        <h2>Raj Srivastav</h2>
        <p style={{color: "blue"}}>raj@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia accusamus voluptate harum dicta eaque voluptatum vel repellendus ratione laboriosam!</p>

      </div>

       <div className={styles.AdminCard}>
        <h2>Raj Srivastav</h2>
        <p style={{color: "blue"}}>raj@gmail.com</p>
        <h3>Score : 50%</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia accusamus voluptate harum dicta eaque voluptatum vel repellendus ratione laboriosam!</p>

      </div>
    </div>
</div>
  )
}

export default withAuthHOC(admin);