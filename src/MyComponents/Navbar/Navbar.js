// import styles from './Navbar.module.css';

// const Navbar = () => {
//     return (
//         <div className={styles.navbar}>
//             <div className={styles.logo}>
//             </div>
//             <div className={styles.right}>
//                 <div className={styles.title}>
//                     <h2>NORTH EAST STUDENTS' FORUM</h2>
//                     <p>Indian Institute of Technology Kharagpur</p>
//                 </div>
//                 <div className={styles.links}>
//                     <p>Home</p>
//                     <p>About Us</p>
//                     <p>Team</p>
//                     <p>Events</p>
//                     <p>Alumni</p>
//                     <p>Contact Us</p>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Navbar;

import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h2>NORTH EAST STUDENTS' FORUM</h2>
          <p>Indian Institute of Technology Kharagpur</p>
        </div>
        <div className={styles.links}>
          <div>
            <Link className={styles.link} to="/">
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/AboutUs">
              <p>About Us</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/Teams">
              <p>Team</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/Events">
              <p>Events</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/Alumni">
              <p>Alumni</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/Articles">
              <p>Articles</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/ContactUs">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
