import React from 'react';
import {connect} from 'react-redux';
import ProfileDisplay from './ProfileDisplay';
import ProfileForm from './ProfileForm';
import Button from '@material-ui/core/Button';

var logout = require('../firebase/login.js').logout;

// Left sidebar
class Profile extends React.Component{

  handleLog = () => {
    //TODO logout
    logout(null, this.props.app);
    window.location.assign('/auth');
  }

  render(){
    return(
      <div id="profile">

        <div id="profile-details">
          {this.props.editProfile ? <ProfileForm data={this.props.profile} />:<ProfileDisplay/>}
        </div>

        <div id="profile-bottom">
          <Button variant="contained" color="secondary" onClick={this.handleLog}>Log Out</Button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editProfile: state.profile.editProfile,
    app: state.db.app
  }
}

export default connect(mapStateToProps)(Profile)