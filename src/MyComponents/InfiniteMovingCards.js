import React from 'react'
import styles from './InfiniteMovingCards.module.css'

// type Testimonial = {
//   quote: string;
//   name: string;
//   title: string;
// }

// type Props = {
//   items: React.ReactNode;
//   reverse?: boolean;
// }

const InfiniteMovingCards = (props) => {
  
  const reverse = props.reverse || false;
  const gap = props.gap || 'small';
  
  return (
    <div data-reverse={reverse} data-gap={gap} className={styles.container}>
      <div className={styles.itemList}>{props.items}</div>
      <div className={styles.itemList}>{props.items}</div>
      {/* <div>{items}</div> */}
    </div>
  )
}

export default InfiniteMovingCards