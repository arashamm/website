import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './_EnNavMenu.css'

class EnNavMenu extends Component {
  
  render() {
    return (

      <div class='Wrapper'>
                  <nav> 
                        <Link to="/">Home</Link>
                        <Link to="/Services/">Services</Link>
                        <Link to="/About/">About</Link>
                        <Link to="/Contact/">Contact</Link>
                        <Link to="/Backoffice/">Backoffice</Link>
                    </nav>
               
          </div>


        
    );
  }
}

export default EnNavMenu;
