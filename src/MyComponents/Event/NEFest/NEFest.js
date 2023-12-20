import styles from "./NEFest.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const NEFest = () => {
    return ( 
        <div className={styles.nefest}>
            <div className={styles.title}>
                <Back/>
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