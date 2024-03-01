import React from 'react'
import styles from './EventCard.module.css'
// import fest23 from './Fest23.png';
// import logo from './nefestlogo.png'
// import { useNavigate } from 'react-router-dom';

// export const EventCard = ({present,event}) => {

//     const navigate=useNavigate();

//   return (
//     <div onClick={()=>navigate(event?.site)} className={present?"EventCard":"EventCard_one"}>
//         <img className="fest23img" src={event?.image} alt="" />
//         <div className="event_card_content">
//             <div className={present?"left_side":"normal"}>
//                 <div className={present?"green_boxes":"green_boxes_one"}>
//                     <div className={present?"green_box":"green_box_one"}>
//                         <div className={present?"green_box_text":"green_box_text_one"}>
//                             {event?.greenbox1}
//                         </div>
//                     </div>
//                     <div className={present?"green_box":"green_box_one"}>
//                         <div className={present?"green_box_text":"green_box_text_one"}>
//                             {event?.greenbox2}
//                         </div>
//                     </div>
//                 </div>
//                 <div className={present?"event_card_title":"event_card_title_one"}>
//                     <p>
//                     {event?.title}
//                     </p>
//                 </div>
//                 <div className={present?"event_card_description":"event_card_description_one"}>
//                     <p>
//                     {event?.description}
//                     </p>
//                 </div>
//             </div>
//             <div className="logo_container">
//                 <img className='festlogo' src={logo} style={present?{display:"block"} : {display:"none"}} alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

const EventCard = (props) => {

    const { event, isHighlighted } = props

    return (
        <div className={styles.container} data-isHighlighted={isHighlighted} >
            <img src={`/events/${event.cover_image}`} alt="" />
            <div className={styles.highlights}>
                {
                    event.highlights.map((highlight, index) => {
                        return (
                            <div key={index} className={styles.highlight}>
                                {highlight}
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.text}>
                <h1>{event.name}</h1>
                <p>{event.short_description}</p>
            </div>
        </div>
    )
}

export default EventCard