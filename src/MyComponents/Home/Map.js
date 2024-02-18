import styles from './Home.module.css';
import ModalView from './Modal';
import {useState} from 'react';

const Map = () => {

    const [open,setOpen]=useState(false);

    return ( 
        <>
        <div className={styles.map} onClick={()=>setOpen(true)}></div>
        <ModalView open={open} setOpen={setOpen}/>
        </>
     );
}
 
export default Map;