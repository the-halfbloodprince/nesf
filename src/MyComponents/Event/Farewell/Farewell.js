// import { Link } from "react-router-dom";
// import styles from "./Farewell.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const Farewell = () => {
//     return (
//         <div className={styles.farewell}>
//             <div className={styles.title}>
//             <Link classname={styles.link} to="/Events">
//                     <Back/>
//                 </Link>
//                 <h2>Farewell</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }

// export default Farewell;

import React from "react";
import Event1 from "../Event1/Event1";
const Farewell = () => {
  return (
    <div>
      <Event1
        heading={"Farewell"}
        description1={
          "Each year, the North East Students' Forum hosts the Annual Farewell Gala, a cherished tradition that bids farewell to our graduating undergraduates and postgraduates. This event brings together students from all academic years to showcase their talents through various performances, fostering a sense of unity and friendship."
        }
        description2={
          "Departing students are honored with parting gifts and share their experiences and advice with their juniors, creating a heartfelt atmosphere of reflection and guidance. The evening culminates in a communal dinner, where laughter and memories are shared, marking the end of one chapter and the beginning of new adventures for all involved."
        }
      />
    </div>
  );
};

export default Farewell;
