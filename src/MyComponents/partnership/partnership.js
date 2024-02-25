import { sponsors } from '../../data/sponsors';
import styles from './partnership.module.css';

const Partnerships = () => {

    return (
        <div classname= {styles.partnership}>
        <div className={styles.text}>
            <div className={styles.left}>
                <h1>Sponsorships and Partnerships</h1>
                <p>We organize a diverse set of events aimed at all round development of the north eastern students at IIT Kharagpur and promoting and showcasing north-eastern culture and tradition. Take a glimpse at our work so far below.</p>
            </div>
            <div className={styles.right}>
                <h1>15+</h1>
                <p>sponsors</p>
            </div>
        </div>
        <div className={styles.images}>
            {sponsors.map(sponsor => (
                <div className={styles.sponsor}>
                    <img src={`/partners/${sponsor.image}`} alt={sponsor.name} />
                </div>
            ))}
        </div>
        </div>
    )
}
 
export default Partnerships;