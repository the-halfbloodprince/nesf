import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Event1.module.css";
import Tilt from "react-parallax-tilt";

import { events } from '../../../data/events';

const Event1 = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // extract slug
  const location = useLocation();
  const pathName = location.pathname.at(-1) === '/' ? location.pathname.slice(8, -1) : location.pathname.slice(8);
  console.log(pathName);

  console.log(events)

  // filter event
  const event = events.find(event => event.slug === pathName);
  console.log(event)

  return (
    <div className={styles.container}>
      {/* Event Description */}

      <div className={styles.societyDescription}>
        <div className={styles.container1}>
          <div className={styles.left}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p>{props.description1}</p>
          </div>
          <div className={styles.right}>
            <div className={styles.subright}>
              <p className={styles.color1}>5K+ </p>
              <p> footfalls</p>
            </div>

            <p className={styles.subright}>
              <p className={styles.color2}>15K+</p>
              <p>performances</p>
            </p>
            <p className={styles.subright}>
              <p className={styles.color3}>20K+</p> <p>something</p>
            </p>
          </div>
        </div>

        <div className={styles.photos}>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-4.jpg" alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-2.jpg" alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-3.jpg" alt="highlight" />
          </Tilt>
        </div>

        <div className={styles.container1}>
          <div className={styles.left}>
            <p>{props.description2}</p>
          </div>
          <div className={styles.right}>
            <div className={styles.subright1}>
              <p className={styles.heading}>Other events </p>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/north-east-festival"
              >
                North East Festival
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/freshers"
              >
                Freshers
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/farewell"
              >
                Farewell
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/food-stall"
              >
                Foodstall
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/foundation-day"
              >
                Foundation Day
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/career-counselling"
              >
                Career Counselling
              </Link>
              <Link
                className={styles.others}
                onClick={handleClick}
                to="/events/career-counselling-workshop"
              >
                Career Counselling Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;
