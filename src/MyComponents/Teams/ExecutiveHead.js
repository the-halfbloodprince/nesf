import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const ExecutiveHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>EXECUTIVE HEADS</h2>
            <div className={styles.items}>
                {Team.executiveHead?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default ExecutiveHead;