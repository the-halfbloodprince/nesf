import styles from './Teams.module.css';
import Card from './Card';
import Team from './Team.js'

const SCOM = () => {
    return ( 
        <div className={`${styles.scom} ${styles.portfolio}`}>
            <h2>STEERING COMMITEE MEMBERS</h2>
            <div className={styles.items}>
                {Team.scom?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SCOM;