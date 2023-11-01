import styles from './Teams.module.css';
import Card from './Card';

const President = () => {
    return ( 
        <div className={`${styles.president} ${styles.portfolio}`}>
            <h2>PRESIDENT</h2>
            <div className={styles.items}>
                <Card/>
            </div>
        </div>
     );
}
 
export default President;