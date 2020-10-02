import React from 'react';
import {connect} from 'react-redux';
import ProfileDisplay from './ProfileDisplay';
import ProfileForm from './ProfileForm';
import Button from '@material-ui/core/Button';

// Left sidebar
class Profile extends React.Component{

  render(){
    return(
      <div id="profile">

        <div id="profile-details">
          {this.props.editProfile ? <ProfileForm/>:<ProfileDisplay/>}
        </div>

        <div id="profile-bottom">
          <Button variant="contained" color="secondary">Log Out</Button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {editProfile: state.editProfile}
}

export default connect(mapStateToProps)(Profile)