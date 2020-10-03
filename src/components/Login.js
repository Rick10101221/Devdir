import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Login/Signup Page
export default class Login extends React.Component{


  handleSign = () => {
    // TODO sign up
    window.location.assign('/');
  }

  handleLog = () => {
    // TODO login
    window.location.assign('/');
  }

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
            <Button variant="contained" color="primary" onClick={this.handleSign}>
              Sign Up
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={this.handleLog}>
              Login
            </Button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}