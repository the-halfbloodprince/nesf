import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const StudentsWelfareSeniorCoordinator = () => {
    return ( 
        <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
        <h2>STUDENTS' WELFARE SENIOR COORDINATOR</h2>
        <div className={styles.items}>
            {Team.studentsWelfareSeniorCoordinator?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default StudentsWelfareSeniorCoordinator;