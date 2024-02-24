import React from 'react'
import styles from './AboutUs.module.css'
import HighlightCard from './HighlightCard'
import Testimonials from '../Testimonials'

const AboutUs = () => {

  // const societyDescription = 

  const workHighlights = [
    {
      title: "North East Festival 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight-2.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "Career Counselling Workshop",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight-3.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "North-East Food Fest 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight-4.jpg",
      link: "/events/north-east-festival-2023"
    },
    {
      title: "Career Counselling Drive 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight-5.jpg"
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
          <div><img src="/highlights/highlight-4.jpg" alt="highlight" /></div>
          <div><img src="/highlights/highlight-2.jpg" alt="highlight" /></div>
          <div><img src="/highlights/highlight-3.jpg" alt="highlight" /></div>
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
      </div>

      {/* Testimonials */}
      <Testimonials />

    </div>
  )
}

export default AboutUs