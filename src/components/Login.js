import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

var login = require('../firebase/login.js').login;
var signup = require('../firebase/login.js').signup;

// Login/Signup Page
class Login extends React.Component{

  constructor(){
    super();

    this.state = {
      email: '',
      pass: ''
    }
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePass = (e) => {
    this.setState({pass: e.target.value})
  }

  handleSign = () => {
    // TODO sign up
    signup(this.state.email, this.state.pass, this.props.auth);
  }

  handleLog = () => {
    // TODO login
    login(this.state.email, this.state.pass, this.props.auth);
  }

  render(){
    if(this.props.log){
      return <Redirect to='/' />;
    }

    return(
      <div id="loginContainer">
        <h1>Devdir</h1>
        <form noValidate autoComplete="off">
        <div id="textInput">
          <div><Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} value={this.state.email} onChange={this.handleEmail}/></div>
          <div><Input type='password' placeholder="Password" inputProps={{ 'aria-label': 'description' }} value={this.state.pass} onChange={this.handlePass}/></div>
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

const mapStateToProps = (state) => {
  return{
    auth: state.db.auth,
    log: state.db.logged
  }
}

export default connect(mapStateToProps)(Login);