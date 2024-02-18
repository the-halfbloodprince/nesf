import styles from './Slider.module.css';
const Circle = ({name}) => {
    return ( 
        <div className='abc'>
        <div className={styles.circle}></div>
        <p className={styles.name}>{name}</p>
        </div>
     );
}
 
export default Circle;