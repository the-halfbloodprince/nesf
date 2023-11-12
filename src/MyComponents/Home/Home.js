import styles from './Home.module.css';
import Hexagon from './Hexagon.js';
import States from './States.js';
import Slider from './Slider/Slider.js'

const Home = () => {
    return ( 
        <div className={styles.home}>
            <div className={styles.intro}>
                <div className={styles.moto}>
                    <Hexagon/>
                </div>
                <div className={styles.states}>
                    <States/>
                </div>
            </div>
            <div className={styles.slider}>
                <Slider/>
            </div>
        </div>
     );
}
 
export default Home;