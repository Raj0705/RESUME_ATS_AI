import React from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton';
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

      <Skeleton variant="rectangular" 
      sx={{borderRadius:"20px"}} 
      width={266}  
      height={200} />
        
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique enim aspernatur cum soluta voluptatem neque libero eaque repudiandae eius.</p>
           <p>Dated : 2025-11-18</p>
        </div>

      <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique enim aspernatur cum soluta voluptatem neque libero eaque repudiandae eius.</p>
           <p>Dated : 2025-11-18</p>
        </div>

      <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique enim aspernatur cum soluta voluptatem neque libero eaque repudiandae eius.</p>
           <p>Dated : 2025-11-18</p>
        </div>

      <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique enim aspernatur cum soluta voluptatem neque libero eaque repudiandae eius.</p>
           <p>Dated : 2025-11-18</p>
        </div>

      </div>
    </div>
  )
}

export default withAuthHOC(History);