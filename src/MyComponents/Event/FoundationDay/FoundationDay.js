// import { Link } from "react-router-dom";
// import styles from "./FoundationDay.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const FoundationDay = () => {
//     return (
//         <div className={styles.foundationday}>
//             <div className={styles.title}>
//                 <Link classname={styles.link} to="/Events">
//                     <Back/>
//                 </Link>
//                 <h2>Foundation Day</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }

// export default FoundationDay;

import React from "react";
import Event1 from "../Event1/Event1";
const FoundationDay = () => {
  return (
    <div>
      <Event1
        heading={"Foundation Day"}
        description1={
          "On the 29th of October each year, the North East Students' Forum, IIT Kharagpur,  joyously celebrates its Foundation Day, marking a year of growth and camaraderie. Last year's inaugural celebration marked a significant milestone as students gathered to commemorate the forum's first year of existence."
        }
        description2={
          "During this festive occasion, students showcase their talents through spirited singing, dancing performances,  fostering unity among members. Engaging activities such as quizzes and games serve as avenues for students to forge deeper connections and strengthen bonds within the forum. Distinguished guests, including professors and esteemed alumni are invited to partake in the festivities as chief guests. Their presence adds a touch of wisdom and experience to the occasion, as they share valuable lessons and insights with the students, inspiring and guiding them on their academic and personal journeys. The Foundation Day Celebration not only honors the establishment of the forum but also serves as a cherished opportunity for students to come together, celebrate their achievements, and strengthen their bonds within the vibrant community of the North East Students' Forum. The Foundation Day Celebration culminates with a shared dinner, providing a delightful opportunity for all attendees to further bond and celebrate the vibrant community of the North East Students' Forum."
        }
      />
    </div>
  );
};

export default FoundationDay;
