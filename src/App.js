import react from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Alumni from './MyComponents/Alumni/Alumni';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path= "/MyComponents/Alumni" element={<Alumni/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
