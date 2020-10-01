import React from 'react';

// Links
function Link() {
  return (
    <div className="display-link">
      <img/>
      <a>Link goes here</a>
    </div>
  );
}

// Displays profile
export default class ProfileDisplay extends React.Component{

  render(){
    return(
      <div id="profile-display">
        
        <h3>name</h3>
        <p>bio goes here lorem ipsum dolor</p>

        <div id="profile-display-skills">
          {/* Material UI Chips here */}
        </div>

        <div id="profile-display-links">
          
        </div>

      </div>
    );
  }

}