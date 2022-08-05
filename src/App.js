import React from "react";
import Homepage from './components/Homepage/Homepage.js'
import Destination from "./components/Destination/Destination.js";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SpaceTourism/" element= {<Homepage />} />
        <Route path="/SpaceTourism/destination/:name" element= {<Destination />} />
        <Route path="/SpaceTourism/crew" element= {<Homepage />} />
        <Route path="/SpaceTourism/tech" element= {<Homepage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
