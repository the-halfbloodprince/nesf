import { Link } from "react-router-dom";
import styles from "./Freshers.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const Freshers = () => {
    return ( 
        <div className={styles.freshers}>
            <div className={styles.title}>
                    <Link classname={styles.link} to="/Events">
                        <Back/>
                    </Link>
                <h2>Freshers</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default Freshers;