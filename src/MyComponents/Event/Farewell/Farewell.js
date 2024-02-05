import { Link } from "react-router-dom";
import styles from "./Farewell.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const Farewell = () => {
    return ( 
        <div className={styles.farewell}>
            <div className={styles.title}>
            <Link classname={styles.link} to="/Events">
                    <Back/>
                </Link>
                <h2>Farewell</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default Farewell;