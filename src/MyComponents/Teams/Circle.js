import styles from './Teams.module.css'

const Circle = ({image}) => {
    return ( 
        <div className={styles.circle}>
            <img src={image} alt="" />
        </div>
    );
}
 
export default Circle;