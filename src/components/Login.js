import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Login/Signup Page
export default class Login extends React.Component{

  render(){
    return(
      <div id="loginContainer">
        <h1>Dinder</h1>
        <form noValidate autoComplete="off">
        <div id="textInput">
          <div><Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} /></div>
          <div><Input type='password' placeholder="Password" inputProps={{ 'aria-label': 'description' }} /></div>
        </div>
        <div id="buttonInput">
          <div>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}