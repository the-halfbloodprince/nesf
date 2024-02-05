import { Link } from "react-router-dom";
import styles from "./FoodStall.module.css";
import Image from "./Image.js";
import Description from "./Description.js";
import Back from "./Back.js";

const FoodStall = () => {
    return ( 
        <div className={styles.foodstall}>
            <div className={styles.title}>
                <Link classname={styles.link} to="/Events">
                    <Back/>
                </Link>
                <h2>Food Stall</h2>
            </div>
        <div className={styles.body}>
            <Image/>
            <Description/>
        </div>
        </div>
     );
}
 
export default FoodStall;