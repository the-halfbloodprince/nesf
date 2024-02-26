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
    quote: "I am so grateful for the support and guidance I received from NESF. It has helped me grow as a person and as a professional.",
    name: "Benjamin Doley",
    title: "Main maanuh"
  },
  {
    quote: "I am so happy for the support and guidance I received from NESF. It has helped me grow as a person and as a professional.",
    name: "Benjamin Doley 2",
    title: "Main maanuh 2"
  },
  {
    quote: "I am so excited for the support and guidance I received from NESF. It has helped me grow as a person and as a professional.",
    name: "Benjamin Doley 3",
    title: "Main maanuh 3"
  },
  {
    quote: "I am so excited for the support and guidance I received from NESF. It has helped me grow as a person and as a professional.",
    name: "Benjamin Doley 4",
    title: "Main maanuh 4"
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