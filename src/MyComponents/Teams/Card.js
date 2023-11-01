import styles from './Teams.module.css';
import Circle from './Circle.js';

const card = () => {
    return ( 
        <div className={styles.card}>
            <Circle/>
            <p>Emily Johnson</p>
        </div>
     );
}
 
export default card;