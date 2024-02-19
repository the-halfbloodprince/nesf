import styles from './Footer.module.css';
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.links}>
                <h2>Quick Links</h2>
                <div className={styles.linksGroup}>
                    <a href='/about-us'>About Us</a>
                    <a href='/events'>Events</a>
                    <a href='/photo-gallery'>Photo Gallery</a>
                    <a href='/sponsors'>Sponsors</a>
                    <a href='/alumni'>Alumni</a>
                    <a href='/constitution'>Constitution</a>
                </div>
            </div>
            <div className={styles.contacts}>
                <h2>Contact Us</h2>
                <div className={styles.linksGroup}>
                    <tel>+91-6002407523</tel>
                    <a href='mailto:nesciitkgp@gmail.com'>nesciitkgp@gmail.com</a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;