import styles from './AboutUs.module.css';
import InfoCard from './InfoCard.js';
import VisionCard from './VisionCard.js';
import MissionCard from './MissionCard.js';

const AboutUs = () => {
    return ( 
        <div className={styles.aboutus}>
            <div className={styles.title}>
                <h2>About Us</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <InfoCard/>
                    <p>"some information about forum"</p>
                </div>
                <div className={styles.vision}>
                    <h2>Vision</h2>
                    <VisionCard/>
                </div>
                <div className={styles.mission}>
                    <h2>Mission</h2>
                    <MissionCard/>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;