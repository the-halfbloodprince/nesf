// import { Link } from "react-router-dom";
// import styles from "./FoodStall.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const FoodStall = () => {
//     return ( 
//         <div className={styles.foodstall}>
//             <div className={styles.title}>
//                 <Link classname={styles.link} to="/Events">
//                     <Back/>
//                 </Link>
//                 <h2>Food Stall</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }
 
// export default FoodStall;

import React from "react";
import Event1 from "../Event1/Event1";
const FoodStall = () => {
  return (
    <div>
      <Event1
        heading={"Food Stall"}
        description1={
          "The North East Students' Forum organized its first ever 3-days long North East Food Stall event in collaboration with Shaurya, the sports fest of IIT Kharagpur from 13th to 15th October 2023.  The members of the forum took center stage, showcasing their culinary prowess by preparing diverse dishes from North East India, featuring authentic flavors from North East India."
        }
        description2={
          "Alongside the culinary delights, traditional attires from the region were exhibited, allowing attendees to try on the attires and immerse themselves in the vibrant cultural heritage of North East India. The event received an overwhelming response, with people delighted to taste authentic North East cuisine and experience the rich traditions firsthand. Overall, it was a resounding success, providing a unique blend of flavors and cultural exploration, all crafted with passion by the talented members of the North East Students' Forum."
        }
      />
    </div>
  );
};

export default FoodStall;