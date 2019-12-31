import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import _NavMenu from './_NavMenu.css'

class NavMenu extends Component {
  
  render() {
    return (

      <div class='Wrapper'>
                  <nav> 
                        <Link to="/">خانه</Link>
                        <Link to="/Services/">خدمات</Link>
                        <Link to="/About/">درباره</Link>
                        <Link to="/Contact/">تماس</Link>
                    </nav>
               
          </div>


        
    );
  }
}

export default NavMenu;
