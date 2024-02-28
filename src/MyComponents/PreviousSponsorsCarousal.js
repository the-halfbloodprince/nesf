import React from 'react'
import styles from './PreviousSponsorsCarousal.module.css'
import InfiniteMovingCards from './InfiniteMovingCards'
import { sponsors } from '../data/sponsors'

const PreviousSponsorsCarousal = () => {
  return (
    <div className={styles.partnerships}>
      <h2 className="heading">Meet our partners</h2>
        <InfiniteMovingCards items={sponsors.map(sponsor => (
          <div className={styles.sponsor}>
            <img src={`/partners/${sponsor.image}`} alt={sponsor.name} />
          </div>
        ))} reverse={true} gap='large' />
    </div>
  )
}

export default PreviousSponsorsCarousal