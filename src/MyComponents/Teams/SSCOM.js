import styles from './Teams.module.css';
import Card from './Card';
import Team from './Team.js';

const SSCOM = () => {
    return ( 
        <div className={`${styles.sscom} ${styles.portfolio}`}>
            <h2>SENIOR STEERING COMMITTEE MEMBERS</h2>
            <div className={styles.items}>
                {Team.sscom?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SSCOM;