import styles from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.logo}>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>
                    <h2>NORTH EAST STUDENTS' FORUM</h2>
                    <p>Indian Institute of Technology Kharagpur</p>
                </div>
                <div className={styles.links}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Team</p>
                    <p>Events</p>
                    <p>Alumni</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;