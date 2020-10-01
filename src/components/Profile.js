import React from 'react';
import ProfileDisplay from './ProfileDisplay';
import ProfileForm from './ProfileForm';

// Left sidebar
export default class Profile extends React.Component{

  render(){
    return(
      <div id="profile">

        <div id="profile-details">
          <ProfileDisplay/>
          <ProfileForm/>
        </div>

        <div id="profile-bottom">

        </div>

      </div>
    );
  }
}