import styles from './Teams.module.css';
import Card from './Card';
import Team from './Team.js'

const President = () => {
    return ( 
        <div className={`${styles.president} ${styles.portfolio}`}>
            <h2>PRESIDENT</h2>
            <div className={styles.items}>
                {Team.president?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default President;