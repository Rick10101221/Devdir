import React from 'react';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';

// Links
function Link(props) {
  return (
    <div className="display-link">
      <img src={props.data.icon} alt="icon" width="32px"/>
      <a href={props.data.link}>{props.data.link}</a>
    </div>
  );
}

// Displays profile
export default class ProfileDisplay extends React.Component{
  
  constructor(){
    super();

    this.state = {
      links: [
        {
          icon: github,
          link: 'link one'
        },
        {
          icon: linkedin,
          link: 'link two'
        },
        {
          icon: mail,
          link: 'link three'
        }
      ]
    };

  }

  render(){
    let i = 0;
    let links = this.state.links.map( link => {
      return <Link data={link} key={'key' + i++}/>
    });

    return(
      <div id="profile-display">
        
        <h3>name</h3>
        <p>bio goes here lorem ipsum dolor</p>

        <div id="profile-display-skills">
          {/* Material UI Chips here */}
        </div>

        <div id="profile-display-links">
          {links}
        </div>

      </div>
    );
  }

}