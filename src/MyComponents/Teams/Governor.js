import styles from './Teams.module.css';
import Card from './Card';

const Governor = () => {
    return ( 
        <div className={` ${styles.governor} ${styles.portfolio}`}>
            <h2>GOVERNORS</h2>
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
 
export default Governor;