// import { Link } from "react-router-dom";
// import styles from "./CareerCounsellingWorkshop.module.css";
// import Image from "./Image.js";
// import Description from "./Description.js";
// import Back from "./Back.js";

// const CareerCounsellingWorkshop = () => {
//     return ( 
//         <div className={styles.CareerCounsellingWorkshop}>
//             <div className={styles.title}>
//             <Link classname={styles.link} to="/Events">
//                     <Back/>
//             </Link>
//                 <h2>Career Counselling Workshop</h2>
//             </div>
//         <div className={styles.body}>
//             <Image/>
//             <Description/>
//         </div>
//         </div>
//      );
// }
 
// export default CareerCounsellingWorkshop;

import React from "react";
import Event1 from "../Event1/Event1";
const CareerCounsellingWorkshop = () => {
  return (
    <div>
      <Event1
        heading={"Career Counselling Workshop"}
        description1={
          "The North East Students' Forum at IIT Kharagpur spearheads a transformative career counseling workshop aimed at empowering underprivileged students from rural areas across North East India. With a primary focus on dispelling myths surrounding education and career paths, the workshop targets students (school students, undergraduates and post graduates), especially in classes 8 to 12, fostering clarity and confidence in their academic and professional pursuits and also how they should proceed in their further studies."
        }
        description2={
          `Members of our forum passionately elucidate the significance of diverse fields such as Arts, Science, and Commerce, unraveling the plethora of career opportunities within each stream. Through comprehensive discussions and real-world examples, various job profiles are explored, empowering students to make informed decisions about their future endeavors.

          The first workshop, held in the summer of 2023, reached eight districts in Assam, namely Jorhat, Majuli, Sivasagar, Dibrugarh, Dhemaji, North Lakhimpur, Karbi Anglong, Dima Hasao, marking a significant step towards the forum's long-term goal of promoting awareness about the importance of quality education and higher education in the North Eastern Region. As advocates for change and empowerment, the North East Students' Forum remains committed to nurturing the aspirations of young minds and fostering a brighter future for the region.`}
      />
    </div>
  );
};

export default CareerCounsellingWorkshop;