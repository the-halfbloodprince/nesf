import styles from './Slider.module.css';
import Circle from './Circle.js'
const Card = ({testimonial}) => {
    return ( 
        <div className={styles.card}>
            <Circle/>
            <div className={styles.text}>
                <p>{testimonial}</p>
            </div>
        </div>
     );
}

export default Card;