// Events.js
import React from 'react';
import styles from './eventsphotolist.module.css';

const Events = () => {
  const eventPhotos = [
    'event1.jpg',
    'event2.jpg',
    'event3.jpg',
    'event4.jpg',
    'event5.jpg',
    'event6.jpg',
  ];

  return (
    <div>
      <h1>Events</h1>
      <div className="event-grid">
        {eventPhotos.map((photo, index) => (
          <div className="event-box" key={index}>
            Event {index + 1}
            <img src={`/${photo}`} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


function App() {
  return (
    <div className={styles.background}>
      <div className={styles.box}>Box 1</div>
      <div className={styles.box}>Box 2</div>
      <div className={styles.box}>Box 3</div>
      <div className={styles.box}>Box 4</div>
      <div className={styles.box}>Box 5</div>
      <div className={styles.box}>Box 6</div>
    </div>
  );
}

export default App;



export default Events;
