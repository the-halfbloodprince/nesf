import styles from './Teams.module.css';
import Card from './Card';
import Team from './Team.js';

const SEM = () => {
    return ( 
        <div className={` ${styles.sem} ${styles.portfolio}`}>
            <h2>SENIOR EXECUTIVE MEMBERS</h2>
            <div className={styles.items}>
                {Team.sem?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SEM;