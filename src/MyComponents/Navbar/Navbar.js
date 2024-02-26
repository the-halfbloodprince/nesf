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
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const navLinks = {
  desktop: [
    {name: "Home", link: "/home"},
    // {name: "About Us", link: "/about-us"},
    {name: "Team", link: "/teams"},
    {name: "Events", link: "/events"},
    {name: "Partnerships", link: "/partnerships"},
  ],
  mobile: [
    {name: "Home", link: "/home"},
    // {name: "About Us", link: "/about-us"},
    {name: "Team", link: "/teams"},
    {name: "Events", link: "/events"},
    {name: "Partnerships", link: "/partnerships"},
  ]
}

const Navbar = () => {

  const [showMenuItems,setShowMenuItems] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}></div>
        <div className={styles.title}>
          <h2>NORTH-EAST STUDENTS' FORUM</h2>
          <p>Indian Institute of Technology Kharagpur</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          {
            navLinks.desktop.map((link, index) => {
              return (
                <div key={index}>
                  <Link className={styles.link} to={link.link}>
                    <p>{link.name}</p>
                  </Link>
                </div>
              );
            })
          }
          {/* <div>
            <Link className={styles.link} to="/home">
              <p>Home</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/#about-us">
              <p>About Us</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/teams">
              <p>Team</p>
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/events">
              <p>Events</p>
            </Link>
          </div> */}
          {/* <div>
            <Link className={styles.link} to="/Alumni">
              <p>Alumni</p>
            </Link>
          </div> */}
          {/* <div>
            <Link className={styles.link} to="/Articles">
              <p>Articles</p>
            </Link>
          </div> */}
          <div>
          </div>
        </div>
        <div className={styles.hamburgerMenu}>
          <a href="#" onClick={()=>setShowMenuItems(!showMenuItems)}>
            <GiHamburgerMenu/>
          </a>
        </div>
        <div className={`${styles.mobileMenu} ${showMenuItems && styles.opened}`} >
          {
            navLinks.mobile.map((link, index) => {
              return (
                <Link key={index} className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to={link.link}>
                  {link.name}
                </Link>
              );
            })
          }
          {/* <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/">Home</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/AboutUs">About Us</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/Teams">Team</Link>
          <Link className={styles.mobilelinks} onClick={()=>setShowMenuItems(false)} to="/Events">Events</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
