import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Cricket from './cricket';
import Match from './indvspak';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cricket" element={<Cricket />}></Route>
          <Route path="/indvspak" element={<Match/>}></Route>
          
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
