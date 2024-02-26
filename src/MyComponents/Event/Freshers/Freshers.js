// import { Link } from "react-router-dom";
// import styles from "./Freshers.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const Freshers = () => {
//     return (
//         <div className={styles.freshers}>
//             <div className={styles.title}>
//                     <Link classname={styles.link} to="/Events">
//                         <Back/>
//                     </Link>
//                 <h2>Freshers</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }

// export default Freshers;

import React from "react";
import Event1 from "../Event1/Event1";
const Freshers = () => {
  return (
    <div>
      <Event1
        heading={"Freshers"}
        description1={
          "Each year, the North East Students' Forum, IIT Kharagpur, hosts the highly anticipated North East Freshers' Event, a vibrant celebration welcoming incoming undergraduates and postgraduates to our campus community."
        }
        description2={
          "This event is a cornerstone of our welcoming tradition, featuring dynamic performances by students from all academic years, a thrilling Mr. and Ms. Freshers' competition, and heartfelt gestures like welcome gifts to ensure every newcomer feels valued. With our esteemed professors as guest speakers delivering an inspiring message, the event sets the tone for a year filled with growth, friendship, and endless possibilities within our college walls."
        }
      />
    </div>
  );
};

export default Freshers;
