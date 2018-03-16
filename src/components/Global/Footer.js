import React, { Component } from 'react';
import imagefooter from './images/dv2.png';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
      <div className="Logo">
          <img src={imagefooter} alt="imgfooter" />
      </div>

        <p>TM & © Lucasfilm Ltd. All Rights Reserved</p> 
        <ul>
		      <li><a href="_blank">Terms of Use</a> |</li>
		      <li><a href="_blank">Legal Notices</a> |</li>
		      <li><a href="_blank">Privacy Policy</a> |</li>
		      <li><a href="_blank">Children’s Online Privacy Policy</a> |</li>
		      <li><a href="_blank">Your California Privacy Rights</a> |</li>
		      <li><a href="_blank">Star Wars at shopDisney</a> |</li>
		      <li><a href="_blank">Star Wars Helpdesk</a> |</li>
		      <li><a href="_blank">Interest-Based Ads</a></li>
		    </ul>
      </div>
    )
  }
}

export default Footer;



