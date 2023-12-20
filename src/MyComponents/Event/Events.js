import styles from './Events.module.css';
const Events = () => {
    return ( 
        <div className={styles.events}>
            <div className={styles.nefest}>
                <div className={styles.circle}></div>
                <h2>North East Festival</h2>
            </div>
            <div className={styles.careercounselling}>
                <h2>Career Counselling Workshop</h2>
                <div className={styles.ccircle}></div>
            </div>
        </div>
    );
}
 
export default Events;