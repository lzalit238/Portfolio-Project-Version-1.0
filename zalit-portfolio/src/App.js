// import logo from './logo.svg';
import './App.scss';
import { Nav } from './Components/Nav.js'
import { Home } from './Components/Home.js'
import {About} from './Components/About.js'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
