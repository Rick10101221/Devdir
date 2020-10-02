import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Login/Signup Page
export default class Login extends React.Component{

  render(){
    return(
      <div>
        <h1>Dinder</h1>
        <form noValidate autoComplete="off">
          <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
          <Input type='password' placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
        <p>Don't have an account?</p>
      </div>
    );
  }
}