import React from 'react';
import Events from './Mycomponents/Events';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import articles from './Mycomponents/articles';
/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
*/


function App() {
  return (
    <div>
    <Events />
   <Router>
    <Routes>
      <Route path="/events"element={Events}/>
      <Route path="/articles"element={articles}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
