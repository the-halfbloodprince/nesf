import React from 'react'
import styles from './HighlightCard.module.css'

function HighlightCard({ highlight }) {
  
  return (
    <a href={highlight.link} className={styles.highlight}>
      <img src={highlight.image} alt={highlight.title} />
      <div className={styles.textGroup}>
        <h1>{highlight.title}</h1>
        <p>{highlight.description}</p>
      </div>
    </a>
  )
}

export default HighlightCard