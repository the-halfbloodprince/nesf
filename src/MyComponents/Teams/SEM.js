import styles from './Teams.module.css';
import Card from './Card';

const SEM = () => {
    return ( 
        <div className={` ${styles.sem} ${styles.portfolio}`}>
            <h2>SENIOR EXECUTIVE MEMBERS</h2>
            <div className={styles.items}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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
 
export default SEM;