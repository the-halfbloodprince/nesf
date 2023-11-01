import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import Alumni from './MyComponents/Alumni/Alumni';
import Teams from './MyComponents/Teams/Teams';
import AboutUs from './MyComponents/AboutUs/AboutUs';
import Events from  './MyComponents/Events/Events';
import Articles from './MyComponents/Events/Articles.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path= "/Alumni" element={<Alumni/>}/>
          <Route exact path="/Teams" element={<Teams/>}/>
          <Route exact path="AboutUs" element={<AboutUs/>}/>
          <Route exact path="/Events" element={<Events/>}/>
          <Route exact path="/Articles" element={<Articles/>}/>
        </Routes>
      </div>
    </Router>
  );
}


// function App() {
//   return (
//     <div>
//     <Events />
//    <Router>
//     <Routes>
//       <Route path="/events"element={Events}/>
//       <Route path="/articles"element={articles}/>
//     </Routes>
//    </Router>
//    </div>
// =======
//   // Link
// } from 'react-router-dom';
// import Alumni from './MyComponents/Alumni/Alumni';
// import Teams from './MyComponents/Teams/Teams';
// import AboutUs from './MyComponents/AboutUs/AboutUs';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path= "/Alumni" element={<Alumni/>}>
//           </Route>
// // <<<<<<< Penuel/AboutUs
// // =======
// //           <Route exact path="/Teams" element={<Teams/>}>
// //           </Route>
// // >>>>>>> main
//           <Route exact path="AboutUs" element={<AboutUs/>}>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
// >>>>>>> main
//   );
// }

export default App;
