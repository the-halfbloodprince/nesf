import React, { useEffect } from 'react'
import styles from './NorthEastFestival2024Banner.module.css'
import Tilt from 'react-parallax-tilt'
import { SparklesCore } from './AceternitySparkles'

const NorthEastFestival2024Banner = () => {

  useEffect(() => {
    const setVW = () => document.documentElement.style.setProperty('--vw', document.documentElement.clientWidth / 100 + 'px')
    setVW()
    const lnr = window.addEventListener('resize', setVW)
    return () => window.removeEventListener('resize', lnr)
  }, [])

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
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={2.4}
            particleDensity={200}
            className="absolute w-full h-full"
            particleColor="#FFFFFF"
           />
          <h1 className={styles.title}>North East Festival <span className={styles.highlighted}>2024</span></h1>
        </div>
      </Tilt>
    </div>
  )
}

export default NorthEastFestival2024Banner