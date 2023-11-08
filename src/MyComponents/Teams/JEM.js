import styles from './Teams.module.css';
import Card from './Card';
import Team from './Team.js'

const JEM = () => {
    return ( 
        <div className={` ${styles.jem} ${styles.portfolio}`}>
            <h2>JUNIOR EXECUTIVE MEMBERS</h2>
            <div className={styles.items}>
                {Team.jem?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default JEM;