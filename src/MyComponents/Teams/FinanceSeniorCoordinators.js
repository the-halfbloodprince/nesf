import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const FinanceSeniorCoordinator = () => {
    return ( 
        <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
        <h2>Finance SENIOR COORDINATOR</h2>
        <div className={styles.items}>
            {Team.financeSeniorCoordinator?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default FinanceSeniorCoordinator;