import { Link } from "react-router-dom";
import styles from "./CareerCounsellingWorkshop.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const CareerCounsellingWorkshop = () => {
    return ( 
        <div className={styles.CareerCounsellingWorkshop}>
            <div className={styles.title}>
            <Link classname={styles.link} to="/Events">
                    <Back/>
            </Link>
                <h2>Career Counselling Workshop</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default CareerCounsellingWorkshop;