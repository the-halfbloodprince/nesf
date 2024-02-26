// import { Link } from "react-router-dom";
// import styles from "./CareerCounselling.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const CareerCounselling = () => {
//     return (
//         <div className={styles.CareerCounselling}>
//             <div className={styles.title}>
//                 <Link classname={styles.link} to="/Events">
//                     <Back/>
//                 </Link>
//                 <h2>Career Counselling Workshop</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }

// export default CareerCounselling;

import React from "react";
import Event1 from "../Event1/Event1";
const CareerCounselling = () => {
  return (
    <div>
      <Event1
        heading={"Career Counselling Session"}
        description1={
          "The welfare team of the North East Students' Forum at IIT Kharagpur diligently organizes career counseling sessions each year, both online and offline, to guide students of the college institute on career development and placement opportunities, with esteemed alumni, professors,  and representatives of industry giants like TATA HITACHI, OLA, PWC, etc. as guest lecturers. These sessions aim to provide valuable insights and assistance to students in navigating the complex landscape of career choices"
        }
        description2={
          "With a focus on career development counseling (CDC) and placement talks, the sessions serve as platforms for students to explore various job profiles and industries, helping them make informed decisions about their future career paths. Through interactive lectures, real-world examples, and practical advice, the counseling sessions empower students to identify their strengths and interests, ultimately aiding them in charting a course toward a fulfilling and rewarding professional journey. Apart from career oriented advices, students are also provided advices on how to form connections with different people outside their community and come out of their comfort zone."
        }
      />
    </div>
  );
};

export default CareerCounselling;
