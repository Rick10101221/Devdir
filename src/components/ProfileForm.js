import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from 'react-redux';
import Save from '../actions/Save';

// Allows profile edits
class ProfileForm extends React.Component{

  render(){
    return(
      <div id="profile-form">
        <TextField label="Name" />

        <TextField 
        label="Bio"
        multiline
        rows={5} />

        <div>
          {/* skill chips here*/}
        </div>

        <div>
          <TextField label="Github" />
          <TextField label="LinkedIn" />
          <TextField label="Email" />
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