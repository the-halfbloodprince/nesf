// import { Link } from "react-router-dom";
// import styles from "./NEFest.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const NEFest = () => {
//     return ( 
//         <div className={styles.nefest}>
//             <div className={styles.title}>
//                     <Link classname={styles.link} to="/Events">
//                         <Back/>
//                     </Link>
//                 <h2>North East Festival</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }
 
// export default NEFest;

import React from "react";
import Event1 from "../Event1/Event1";
const NEFest = () => {
  return (
    <div>
      <Event1
        heading={"NORTH EAST FESTIVAL: celebrating cultural diversity"}
        description1={
          "The North East Festival, an annual event organized by the North East Students' Forum of IIT Kharagpur, is a vibrant celebration that showcases the rich cultural diversity of North East India to the entire college community. Through captivating dance performances, dazzling fashion shows by the students of the Forum, and also traditional dance showcases from various North East State Houses in Kolkata, attendees are treated to an immersive experience of the region's heritage."}
        description2={
          "Distinguished chief guests deliver inspiring speeches, emphasizing the importance of cultural exchange and unity, while handicraft displays, traditional attire exhibits, and authentic cuisine stalls provide further insight into the intricate craftsmanship and flavors of North East India. With each passing year, the festival serves as a platform to promote understanding and appreciation of the region's culture among students and faculty alike."
        }
      />
    </div>
  );
};

export default NEFest;