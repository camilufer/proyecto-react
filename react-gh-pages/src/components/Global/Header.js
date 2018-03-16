import React, { Component } from 'react';
import logo from './images/Star_Wars_Yellow_Logo.svg.png';

import './css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="swlogo" />
        </div>
      </div>
    )
  }
}

export default Header;

