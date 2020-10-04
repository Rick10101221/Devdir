import React from 'react';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';
import swipeLeft from '../media/swipeLeft.png'
import swipeRight from '../media/swipeRight.png'

// A search result card
export default class SearchResult extends React.Component{

  render(){

    return(
      <div id="overlay">
        <img id="swipeLeft" src={swipeLeft}/>
        <img id="swipeRight" src={swipeRight}/>
        <div id="result">
          <h1 id="resultName">Darien "The Carry" Tsai</h1>
          <p id="resultBio">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <div id="profile-display-skills">

          </div>
          <div id="linkContainer">
            <img src={github} alt="#"/>
            <img src={linkedin} alt="#"/>
            <img src={mail} alt="#"/>
          </div>
        </div>
      </div>
    );
  }
}