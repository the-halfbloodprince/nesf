import React from 'react'
import styles from './InfiniteMovingCards.module.css'

// type Testimonial = {
//   quote: string;
//   name: string;
//   title: string;
// }

// type Props = {
//   items: React.ReactNode;
// }

const InfiniteMovingCards = ({ items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemList}>{items}</div>
      <div className={styles.itemList}>{items}</div>
      {/* <div>{items}</div> */}
    </div>
  )
}

export default InfiniteMovingCards