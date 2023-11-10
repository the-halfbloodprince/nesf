import styles from './Teams.module.css';
import Circle from './Circle.js';

const card = ({name,image}) => {
    return ( 
        <div className={styles.card}>
            <Circle
                image={image}
            />
            <p>{name}</p>
        </div>
     );
}
 
export default card;