import React from 'react'
import { Carousel as ReactImageCarousal } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './Carousal.module.css'

const Carousal = (props) => {
  
  const imagePaths = props.imagePaths || [];
  
  return (
    <div className={styles.container}>
      <ReactImageCarousal dynamicHeight={false} autoPlay={true} infiniteLoop={true} showArrows={true} showThumbs={false} showStatus={false} >
        {
          imagePaths.map(imagePath => (
            <div className={styles.image_container}>
              <img src={imagePath} alt={imagePath} />
            </div>
          ))  
        }
      </ReactImageCarousal>
    </div>
  )
}

export default Carousal