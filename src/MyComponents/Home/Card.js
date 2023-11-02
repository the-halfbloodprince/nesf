import styles from './Home.module.css';
import Circle from './Circle.js'
const Card = () => {
    return ( 
        <div className={styles.card}>
            <Circle/>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
     );
}
 
export default Card;