import React from 'react';
import styles from './Alumni.module.css';
import CircleIndividual from './CircleIndividual'

const CardIndividual = () => {
    return ( 
        <div className= {styles.cardindividual}>
            <CircleIndividual/>
            <div className={styles.intro}>
                <h1>Babul Pegu</h1>
            </div>
        </div>
     );
}
 
export default CardIndividual;