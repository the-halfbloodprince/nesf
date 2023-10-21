import React from 'react';
import{Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function navy(){
   const navigate=useNavigate();
}
function handleClick(){
    navigate("/articles")
}


const Events =() =>{
    return(
        <div>
            <h1>NESF Events Page</h1>
            <Link  to="/">
                img src="events 1.jpg" alt="North-East Fresher's Party"
            </Link>
            <Link to ="/career counselling session">
            img src="events 2.jpg" alt="Career Counselling Session"
            </Link>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
    }
    
    

export default Events;
/*
//creating an event page that gets redirected to another page with articles and stories,like when you tap on the picture it gets redirected to the articles page */
