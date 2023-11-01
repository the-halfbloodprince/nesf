import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import Alumni from './MyComponents/Alumni/Alumni';
import Teams from './MyComponents/Teams/Teams';
// import AboutUs from './MyComponents/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path= "/Alumni" element={<Alumni/>}>
          </Route>
          <Route exact path="/Teams" element={<Teams/>}>
          {/* </Route> */}
          {/* <Route exact path="AboutUs" element={<AboutUs/>}> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
