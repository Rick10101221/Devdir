import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Login/Signup Page
export default class SignUp extends React.Component{

  render(){
    return(
      <div>
        <h1>Dinder</h1>
        <form noValidate autoComplete="off">
          <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
          <Input type='password' placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Bio" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Skills" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="LinkedIn" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Github" inputProps={{ 'aria-label': 'description' }} />
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </form>
        <p>Already have an account?</p>
      </div>
    );
  }
}