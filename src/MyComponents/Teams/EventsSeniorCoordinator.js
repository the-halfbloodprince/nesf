import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const EventsSeniorCoordinator = () => {
    return ( 
        <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
        <h2>EVENTS SENIOR COORDINATOR</h2>
        <div className={styles.items}>
            {Team.eventsSeniorCoordinator?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default EventsSeniorCoordinator;