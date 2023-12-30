import styles from "./States.module.css";

const States = () => {
    return ( 
        <div className={styles.maps}>
            <div className={styles.sikkim}>
                <h2>Sikkim</h2>
            </div>
            <div className={styles.arunachal}>
                <h2>Arunachal Pradesh</h2>
            </div>
            <div className={styles.nagaland}>
                <h2>Nagaland</h2>
            </div>
            <div className={styles.meghalaya}>
                <h2>Meghalaya</h2>
            </div>
            <div className={styles.assam}>
                <h2>Assam</h2>
            </div>
            <div className={styles.tripura}>
                <h2>Tripura</h2>
            </div>
            <div className={styles.mizoram}>
                <h2>Mizoram</h2>
            </div>
            <div className={styles.manipur}>
                <h2>Manipur</h2>
            </div>
        </div>
     );
}
 
export default States;