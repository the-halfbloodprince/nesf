import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const EventsHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
        <h2>EVENTS HEADS</h2>
            <div className={styles.items}>
                {Team.eventsHead?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default EventsHead;