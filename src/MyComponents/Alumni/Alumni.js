import styles from './Alumni.module.css'
import CardBatch from './CardBatch';
import CardIndividual from './CardIndividual';

const Alumni = () => {
    return ( 
        <div className={styles.alumni}>
            <div className={styles.batches}>
                <CardBatch/>
            </div>
            <div className={styles.individuals}>
                <CardIndividual/>
                <CardIndividual/>
            </div>
        </div>
     );
}
 
export default Alumni;