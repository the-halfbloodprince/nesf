import styles from './Slider.module.css';
import Circle from './Circle.js'
const Card = ({testimonial,image,name}) => {
    return ( 
        <div className={styles.card}>
            <Circle name={name}/>
            <div className={styles.text}>
                <p>{testimonial}</p>
            </div>
        </div>
     );
}

export default Card;