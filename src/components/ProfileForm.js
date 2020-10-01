import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

// Allows profile edits
export default class ProfileForm extends React.Component{

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
        startIcon={<SaveIcon />}
        >
        Save
        </Button>

      </div>
    );
  }
}