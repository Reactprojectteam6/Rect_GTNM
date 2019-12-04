import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterURL from '../RouterURL/RouterURL';
import Footer from '../Footer/Footer';
import Slider from'../Slider/Slider.js';
import Header from '../Header/Header.js';
class App extends Component {
  render() {
    return (
       <div>
         
          <Router>
            <Header/>
            <Slider/>
             <RouterURL></RouterURL>
          </Router>
          <Footer/>
         
       </div> 
      
    );
  }
}

export default App;
