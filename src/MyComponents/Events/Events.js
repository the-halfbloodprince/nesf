import React from 'react';
import{Link} from 'react-router-dom';
import styles from './events.module.css';


function Events(){
    return(
        <div>
            <h1>North-East Events page</h1>
            <Link  to="/">
                img src="events 1.jpg" alt="North-East Fresher's Party"
            </Link>
            <Link to ="/career counselling session">
            img src="events 2.jpg" alt="Career Counselling Session"
            </Link>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
    }
    function Events(){
        return <div className={styles.events}/>
}

    function App() {
        return (
          <div className={styles.background}>
            <div className={styles.circle}>Circle 1</div>
            <div className={styles.circle}>Circle 2</div>
          </div>
        );
      }
      
    
    
    

export default Events;
/*creating an event page that gets redirected to another page with articles and stories,like when you tap on the picture it gets redirected to the articles page */
