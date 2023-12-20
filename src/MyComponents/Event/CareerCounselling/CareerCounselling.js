import styles from "./CareerCounselling.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const CareerCounselling = () => {
    return ( 
        <div className={styles.CareerCounselling}>
            <div className={styles.title}>
                <Back/>
                <h2>Career Counselling Workshop</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default CareerCounselling;