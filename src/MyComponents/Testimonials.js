import React from 'react'
import styles from './Testimonials.module.css'
import InfiniteMovingCards from './InfiniteMovingCards';

// type Props = {
//   children: React.ReactNode;
// }

// type Testimonial = {
//   quote: string;
//   name: string;
//   title: string;
// }

const testimonials = [
  {
    quote: "NESF has transformed the life of my Students. They have become more confident and have developed a sense of belongingness.",
    name: "Khanindra Pathak",
    title: "Professor, IIT Kharagpur"
  },
  {
    quote: "Being part of NESF during my time at IIT Kharagpur, has been an enriching experience. I have made friends for life and have grown as a person.",
    name: "Babul Pegu",
    title: "Former President, NESF"
  },
  {
    quote: "Leading NESF is an honor. Together we champion unity and empower voices, forging a brighter future.",
    name: "Thokchom Preety Devi",
    title: "President, NESF"
  },
  {
    quote: "I am so grateful for the support and guidance I received from NESF. It has helped me grow as a person and as a professional.",
    name: "Benjamin Doley",
    title: "Executive Head, NESF"
  },
]

const Testimonials = (props) => {
    
  return (
    <div className={styles.testimonials}>
        <h1 className={styles.heading}>What do people say about us?</h1>
        <InfiniteMovingCards items={testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} />)} />
    </div>
  )
}

// type TestimonialCardProps = {
//   testimonial: Testimonial;
// }

const TestimonialCard = ({ testimonial }) => (
  <div className={styles.testimonial_card}>
    <p className={styles.testimonial_card__quote}>{testimonial.quote}</p>
    <div className={styles.testimonial_card__author}>
      <p className={styles.testimonial_card__name}>{testimonial.name}</p>
      <p className={styles.testimonial_card__title}>{testimonial.title}</p>
    </div>
  </div>
)

export default Testimonials