import React from 'react'
import fest23 from './Fest23.png';
import logo from './nefestlogo.png'

export const EventCard = ({present}) => {
  return (
    <div className={present?"EventCard":"EventCard_one"}>
        <img className="fest23img" src={fest23} alt="" />
        <div className="event_card_content">
            <div className={present?"left_side":"normal"}>
                <div className={present?"green_boxes":"green_boxes_one"}>
                    <div className={present?"green_box":"green_box_one"}>
                        <div className={present?"green_box_text":"green_box_text_one"}>
                            5K+ footfall
                        </div>
                    </div>
                    <div className={present?"green_box":"green_box_one"}>
                        <div className={present?"green_box_text":"green_box_text_one"}>
                            10+ cultural performances
                        </div>
                    </div>
                </div>
                <div className={present?"event_card_title":"event_card_title_one"}>
                    <p>
                    North East Festival 2023
                    </p>
                </div>
                <div className={present?"event_card_description":"event_card_description_one"}>
                    <p>
                        We organize a diverse set of events aimed at all round development of the north eastern students at IIT Kharagpur and promoting and showcasing north-eastern culture and tradition. Take a glimpse at our work so far below.
                    </p>
                </div>
            </div>
            <div className="logo_container">
                <img className='festlogo' src={logo} style={present?{display:"block"} : {display:"none"}} alt="" />
            </div>
        </div>
    </div>
  )
}
