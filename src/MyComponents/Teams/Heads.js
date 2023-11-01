import styles from './Teams.module.css';
import Card from './Card';

const Heads = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>HEADS</h2>
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
            </div>
        </div>
     );
}
 
export default Heads;