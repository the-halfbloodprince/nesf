import Card from './Card.js';
import styles from './Slider.module.css';
import Testimonial from './Testimonial.js'
import {useState} from 'react';
import right from "./right.png"
import left from "./left.png"

const Slider = () => {

  const [ID,setID] =useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(Testimonial.filter((testimonial) => testimonial.id===ID));



  const leftClick= () => {
      console.log("LEFT CLICKED");
      if (ID===1){
        setID(3)
      }
      else{
        setID(ID-1)
      }
      setCurrentTestimonial(Testimonial.filter((testimonial) => testimonial.id===ID));
    };

  const rightClick= () => {
    if (ID===3){
      setID(1)
    }
    else{
      setID(ID+1)
    }
      console.log("RIGHT CLICKED");
      setCurrentTestimonial(Testimonial.filter((testimonial) => testimonial.id===ID));
  };

  return ( 
    <div className={styles.slider}>
        <div onClick={leftClick}><img src= {left} className = {styles.leftbutton}/></div>
      <div className={styles.items}>
                {currentTestimonial?.map(person=>(
                    <Card
                        key={person.id}
                        name={person.name}
                        image={person.image}
                        testimonial={person.testimonial}
                    />
                ))}
            </div>
          <div onClick={rightClick}><img src={right} className = {styles.rightbutton} /></div>
    </div>
   );
}
 
export default Slider;