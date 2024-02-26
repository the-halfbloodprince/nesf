import React from 'react'
import styles from './AboutUs.module.css'
import HighlightCard from './HighlightCard'
import Testimonials from '../Testimonials'
import { sponsors } from '../../data/sponsors'
import InfiniteMovingCards from '../InfiniteMovingCards'
import Tilt from 'react-parallax-tilt'

const AboutUs = () => {

  // const societyDescription = 

  const workHighlights = [
    {
      title: "North-East Festival 2023",
      description: "IIT Kharagpur's annual celebration of North East India's diversity, uniting through captivating performances, inspiring speeches, and vibrant showcases, fostering cultural understanding.",
      image: "/highlights/highlight-2.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "Career Counselling Workshop",
      description: "Nurturing young aspirations in North East India through a workshop dispelling myths, providing clarity, and advancing awareness about quality education in eight districts of Assam.",
      image: "CC Workshop.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "North-East Food Fest 2023",
      description: "A harmonious blend of diverse dishes and traditional attires at the collaborative 3-day event with Shaurya, showcasing cultural exploration by talented forum members.",
      image: "/highlights/highlight-5.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "Career Counselling Session 2023",
      description: "IIT Kharagpur's annual sessions featuring alumni, professors, and industry representatives, focusing on Career Development Counseling and offering valuable insights for a rewarding professional journey.",
      image: "CC Session.jpg"
    },
  ]

  return (
    <div id='about-us' className={styles.container}>
      {/* <h1 className={styles.heading}>About Us</h1> */}
      {/* TODO: CHANGE WITH ACTUAL CONTENT */}

      {/* Society Description */}
      <h1 className={styles.heading}>About NESF</h1>
      <div className={styles.societyDescription}>
        <p>
        Our society is dedicated to fostering a sense of community and support among students hailing from North East India who are pursuing their education at IIT Kharagpur. We aim to create a familial atmosphere where every member feels comfortable and safe, offering a supportive network to navigate through college life.
        </p>
        <div className={styles.photos}>
          <Tilt className={styles.photo} glareEnable={true}><img src="/highlights/highlight-4.jpg" alt="highlight" /></Tilt>
          <Tilt className={styles.photo} glareEnable={true}><img src="/highlights/highlight-2.jpg" alt="highlight" /></Tilt>
          <Tilt className={styles.photo} glareEnable={true}><img src="/highlights/highlight-3.jpg" alt="highlight" /></Tilt>
        </div>
        <p>
          Our initiatives range from organizing events that celebrate the rich and diverse culture of North East India to providing career counseling workshops led by experienced seniors and industry professionals. Additionally, we extend our reach by conducting workshops for school students across various parts of North East India, aiming to empower and guide them towards a brighter future.
        </p>
      </div>

      {/* Work Highlights */}
      <div className={styles.workHighlight}>
        <h3 className={styles.heading}>Here's a glimpse of the work so far</h3>
        <div className={styles.workHighlight__content}>
          {
            workHighlights.map((highlight,index) => (
              <HighlightCard highlight={highlight} key={index} />
            ))
          }
        </div>
      </div>

      {/* Previous Partnerships */}
      <div className={styles.partnerships}>
          <h2 className={styles.heading}>Partnerships</h2>
          <InfiniteMovingCards items={sponsors.map(sponsor => (
            <div className={styles.sponsor}>
              <img src={`/partners/${sponsor.image}`} alt={sponsor.name} />
            </div>
          ))} reverse={true} gap='large' />
      </div>

      {/* Testimonials */}
      <Testimonials />

    </div>
  )
}

export default AboutUs