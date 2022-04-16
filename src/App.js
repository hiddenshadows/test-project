import './App.css';
import React from 'react';
import Nav from "./components/nav"
import Home from "./components/home-section"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"
import Section5 from "./components/section5"
import Section6 from "./components/section6"
import Section7 from "./components/section7"
import Section8 from "./components/section8"
import Section9 from "./components/section9"
import Section10 from "./components/section10"
import Section11 from "./components/section11"
import Footer from "./components/footer"

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Nav />
      <Home />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />*/}
      {/* <Section9 /> 
      <Section10 /> */}
      {/* <Section11 /> */}
      <Footer />
      
    </div>
    
  );
}

export default App;
