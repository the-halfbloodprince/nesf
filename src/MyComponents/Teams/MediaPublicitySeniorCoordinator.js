import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const MediaPublicitySeniorCoordinator = () => {
    return ( 
        <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
        <h2>MEDIA AND PUBLICITY SENIOR COORDINATORS</h2>
        <div className={styles.items}>
            {Team.mediaPublicitySeniorCoordinator?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MediaPublicitySeniorCoordinator;