import React from 'react'
import './Events.css'
import fest24 from './NEFest24.png';
import { EventCard } from './EventCard';

function Events() {

    const events=[
        {
            title:"North East Festival 2023",
            description:"The North East Festival at IIT Kharagpur is an annual cultural extravaganza that showcases the rich diversity of North East India. Through captivating performances, inspiring speeches, and vibrant showcases, the festival fosters unity and appreciation on campus, providing a platform for cultural exchange and understanding among students and faculty."
        },
        {
            title:"Foundation Day",
            description:"On October 29th, the North East Students' Forum, IIT Kharagpur, celebrates its Foundation Day, reflecting a year of growth. Spirited performances, engaging activities, and esteemed guests foster unity, culminating in a shared dinner to strengthen bonds within the vibrant community."
        },
        {
            title:"Food Stall",
            description:"Collaborating with Shaurya, IIT Kharagpur's sports fest, the North East Students' Forum hosted a 3-day Food Stall event from October 13th to 15th, 2023. With diverse dishes and traditional attires, the event, a blend of authentic flavors and cultural exploration, was a resounding success by talented forum members."
        },
        {
            title:"Freshers",
            description:"Annually, IIT Kharagpur's North East Students' Forum hosts a vibrant Freshers' Event, welcoming new students with dynamic performances, a Mr. and Ms. Freshers' competition, and inspiring messages from esteemed professors, setting the tone for a year of growth and friendship within our college community."
        },
        {
            title:"Farewell",
            description:"Annually, the North East Students' Forum hosts a cherished Annual Farewell Gala, bidding adieu to graduating students. The event unites students through performances, honors departing individuals with gifts and shared experiences, and concludes with a communal dinner, marking the end of one chapter and the start of new adventures for all."
        },
        {
            title:"Career Counselling Session",
            description:"The North East Students' Forum at IIT Kharagpur hosts annual career counseling sessions, both online and offline, featuring alumni, professors, and industry representatives. Focused on Career Development Counseling (CDC) and placement talks, these sessions provide valuable insights, helping students make informed decisions and step out of their comfort zones for a rewarding professional journey."
        },
        {
            title:"Career Counselling Workshop",
            description:"IIT Kharagpur's North East Students' Forum conducts a career counseling workshop for rural students in North East India, dispelling education myths and providing clarity for classes 8 to 12. The 2023 workshop reached eight districts in Assam, advancing awareness about quality education. The forum remains committed to nurturing young aspirations in the North Eastern Region."
        }
    ]

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
        <EventCard event={events[0]} present={1}/>
        <div className="eventpair">
            <EventCard event={events[1]} present={0}/>
            <EventCard event={events[2]} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard event={events[3]} present={0}/>
            <EventCard event={events[4]} present={0}/>
        </div>
        <div className="eventpair">
            <EventCard event={events[5]} present={0}/>
            <EventCard event={events[6]} present={0}/>
        </div>
    </div>
  )
}

export default Events