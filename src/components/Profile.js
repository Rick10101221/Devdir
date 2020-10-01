import React from 'react';
import {connect} from 'react-redux';
import ProfileDisplay from './ProfileDisplay';
import ProfileForm from './ProfileForm';

// Left sidebar
class Profile extends React.Component{

  render(){
    return(
      <div id="profile">

        <div id="profile-details">
          {this.props.editProfile ? <ProfileForm/>:<ProfileDisplay/>}
        </div>

        <div id="profile-bottom">

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {editProfile: state.editProfile}
}


export default connect(mapStateToProps)(Profile)