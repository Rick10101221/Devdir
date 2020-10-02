import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';
import {connect} from 'react-redux';
import Save from '../actions/Save';

// Allows profile edits
class ProfileForm extends React.Component{

  render(){
    return(
      <div id="profile-form">
        <TextField label="Name" className="profile-input"/>

        <TextField 
        label="Bio"
        multiline
        rows={5}
        className="profile-input" />

        <div>
          {/* skill chips here*/}
        </div>

        <div>
          <TextField className="profile-input" label="Github" />
          <TextField className="profile-input" label="LinkedIn" />
          <TextField className="profile-input" label="Email" />
        </div>

        <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon/>}
        onClick={this.props.save}
        >
        Save
        </Button>

        <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<BlockIcon/>}
        id="cancel"
        onClick={this.props.save}
        >
        Cancel
        </Button>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      save: () => {dispatch(Save())}
  }
}

export default connect(null, mapDispatchToProps)(ProfileForm);