import styles from './Teams.module.css';
import Trenure from './Trenure.js'
import President from './President.js';
import SSCOM from './SSCOM.js';
import SCOM from './SCOM.js';
import Governors from './Governor.js';
import Heads from './Heads.js';
import SEM from './SEM.js';
import JEM from './JEM.js';

const Teams = () => {
    return ( 
        <div className={styles.teams}>
            <div className={styles.title}>
                <h2>2022-23</h2>
            </div>
            <div className={styles.trenure}>
                <Trenure/>
                <Trenure/>
            </div>
                <President/>
                <SSCOM/>
                <SCOM/>
                <Governors/>
                <Heads/>
                <SEM/>
                <JEM/>
        </div>
     );
}
 
export default Teams;