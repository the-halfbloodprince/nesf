import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {

  // const societyDescription = 

  const workHighlights = [
    {
      title: "North East Festival 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight2.jpg"
    },
    {
      title: "Career Counselling Workshop",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight3.jpg"
    },
    {
      title: "North-East Food Fest 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight3.jpg"
    },
    {
      title: "Career Counselling Drive 2023",
      description: "We organized a festival to celebrate the culture and heritage of the North East. The festival featured traditional music, dance, and food from the region, as well as workshops and talks on environmental issues.",
      image: "/highlights/highlight3.jpg"
    },
  ]

  return (
    <div id='about-us' className={styles.container}>
      {/* <h1 className={styles.heading}>About Us</h1> */}
      {/* TODO: CHANGE WITH ACTUAL CONTENT */}

      {/* Society Description */}
      <div className={styles.societyDescription}>
        <p>
          We are a group of people who are passionate about the environment and want to make a difference in the world. We believe that by working together, we can make a positive impact on the environment and help create a better future for all.
        </p>
        <p>
          Our mission is to raise awareness about environmental issues and promote sustainable living. We are committed to educating people about the importance of protecting the environment and inspiring them to take action.
        </p>
        <p>
          We are dedicated to making a difference in the world and are always looking for new ways to help the environment. We believe that by working together, we can create a better future for all.
        </p>
      </div>

      {/* Work Highlights */}
      <div className={styles.workHighlight}>
        <h3>Here's a glimpse of the work so far</h3>
        <div className={styles.workHighlight__content}>
          {
            workHighlights.map((highlight,index) => (
              <div key={index} className={styles.highlight}>
                <img src={highlight.image} alt={highlight.title} />
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Previous Partnerships */}
      <div className={styles.partnerships}>
          <h2>Partnerships</h2>
      </div>

      {/* Testimonials */}
      <div className={styles.testimonials}>
          <h2>What people say about us?</h2>
      </div>
    </div>
  )
}

export default AboutUs