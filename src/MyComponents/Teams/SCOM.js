import styles from './Teams.module.css';
import Card from './Card';

const SCOM = () => {
    return ( 
        <div className={`${styles.scom} ${styles.portfolio}`}>
            <h2>STEERING COMMITEE MEMBERS</h2>
            <div className={styles.items}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
     );
}
 
export default SCOM;