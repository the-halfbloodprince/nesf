import React from 'react'
import './Events.css'
import fest24 from './NEFest24.png';
import { EventCard } from './EventCard';

function Events() {
  return (
    <div className='events'>
        <div className="events_card">
            <img className='nefest24img' src={fest24} alt="" />
            <div className="event_content">
                <div className="green_box">
                    <div className="green_box_text">
                        Even Grander
                    </div>
                </div>
                <div className="event_content_text">
                    North East Festival 2024
                </div>
                <div className="coming_soon">
                    <div className="coming_soon_text">
                        Coming Soon...
                    </div>
                </div>
            </div>
        </div>
        <div className="previous_events">
            <div className="previous_events_title">
                Our Previous Events
            </div>
            <div className="previous_events_text">
                <p>
                    We organize a diverse set of events aimed at all round development of the north eastern students at IIT Kharagpur and promoting and showcasing north-eastern culture and tradition. Take a glimpse at our work so far below.
                </p>
            </div>
        </div>
        <EventCard present={1}/>
        <div className="eventpair">
            <EventCard className={"one"} present={0}/>
            <EventCard className={"two"} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard className={"one"} present={0}/>
            <EventCard className={"two"} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard className={"one"} present={0}/>
            <EventCard className={"two"} present={0}/>
        </div>
    </div>
  )
}

export default Events