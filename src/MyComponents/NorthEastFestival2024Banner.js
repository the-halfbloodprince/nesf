import React from 'react'
import styles from './NorthEastFestival2024Banner.module.css'

const NorthEastFestival2024Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marqueeText}>
        { Array.from({ length: 20 }).map((_, index) => <span>{'Coming Soon ✨'}</span>) }
      </div>
      <div className={styles.marqueeText}>
        { Array.from({ length: 20 }).map((_, index) => <span>{'Coming Soon ✨'}</span>) }
      </div>
      <div className={styles.banner}>
        <h1 className={styles.title}>North East Festival 2024</h1>
      </div>
    </div>
  )
}

export default NorthEastFestival2024Banner