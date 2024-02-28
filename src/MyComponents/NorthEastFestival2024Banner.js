import React from 'react'
import styles from './NorthEastFestival2024Banner.module.css'
import Tilt from 'react-parallax-tilt'

const NorthEastFestival2024Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marqueeText}>
        { Array.from({ length: 20 }).map((_, index) => <span>{'Coming Soon ✨'}</span>) }
      </div>
      <div className={styles.marqueeText}>
        { Array.from({ length: 20 }).map((_, index) => <span>{'Coming Soon ✨'}</span>) }
      </div>
      <Tilt className={styles.tiltContainer} glareEnable={true}>
        <div className={styles.banner}>
          <h1 className={styles.title}>North East Festival <span className={styles.highlighted}>2024</span></h1>
        </div>
      </Tilt>
    </div>
  )
}

export default NorthEastFestival2024Banner