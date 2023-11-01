import styles from './Teams.module.css';
import Card from './Card';

const SSCOM = () => {
    return ( 
        <div className={`${styles.sscom} ${styles.portfolio}`}>
            <h2>SENIOR STEERING COMMITTEE MEMBERS</h2>
            <div className={styles.items}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
     );
}
 
export default SSCOM;