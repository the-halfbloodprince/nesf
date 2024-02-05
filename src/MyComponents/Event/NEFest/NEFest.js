import { Link } from "react-router-dom";
import styles from "./NEFest.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const NEFest = () => {
    return ( 
        <div className={styles.nefest}>
            <div className={styles.title}>
                    <Link classname={styles.link} to="/Events">
                        <Back/>
                    </Link>
                <h2>North East Festival</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default NEFest;