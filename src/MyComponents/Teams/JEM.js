import styles from './Teams.module.css';
import Card from './Card';

const JEM = () => {
    return ( 
        <div className={` ${styles.jem} ${styles.portfolio}`}>
            <h2>JUNIOR EXECUTIVE MEMBERS</h2>
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
            </div>
        </div>
     );
}
 
export default JEM;