import { Link } from "react-router-dom";
import styles from "./FoundationDay.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const FoundationDay = () => {
    return ( 
        <div className={styles.foundationday}>
            <div className={styles.title}>
                <Link classname={styles.link} to="/Events">
                    <Back/>
                </Link>
                <h2>Foundation Day</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default FoundationDay;