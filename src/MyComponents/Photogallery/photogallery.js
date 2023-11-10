import React from 'react';
import { Link } from 'react-router-dom';
import styles from './photogallery.module.css';

const PhotoGallery = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <Link to="/events">
        <img src="/photo1.jpg" alt="Photo 1" />
      </Link>
      <Link to="/events">
        <img src="/photo2.jpg" alt="Photo 2" />
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.white-box}>Box 1</div>
      <div className={styles.white-box}>Box 2</div>
      <div className={styles.black-flower}>🌼</div>
    </div>
  );
}

export default App;
export default PhotoGallery;
