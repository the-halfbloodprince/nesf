import styles from './Footer.module.css';
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.links}>
                <h2>Quick Links</h2>
                <p>About Us</p>
                <p>Events</p>
                <p>Photo Gallery</p>
                <p>Sponsors</p>
                <p>Alumni</p>
                <p>Constitution</p>
            </div>
            <div className={styles.contacts}>
                <h2>Contact Us</h2>
                <p>+91-9994444333</p>
                <p>nesc.iitkgp@gmail.com</p>
            </div>
        </div>
     );
}
 
export default Footer;