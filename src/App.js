import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {connect} from 'react-redux';
import Init from './actions/Init';

var isLoggedIn = false;

class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div id="App">
        <Router>
          <Switch>

            <Route path="/" exact>
              <Dashboard/>
            </Route>

            <Route path="/auth">
              <Login/>
            </Route>

          </Switch>
        </Router>
        
      </div>
    );
  }

  componentDidMount(){
    var firebase = require('firebase');
    require('firebase/auth');
    require('firebase/database');
    require('dotenv').config();

    var app = firebase.initializeApp({
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId
    });

    var auth = firebase.auth();
    var db = firebase.database();
    let user = {};
    let users = {};

    auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(firebaseUser);
          //reroute to dashboard
          user = firebaseUser;
          isLoggedIn = true;
          console.log(isLoggedIn);
      } else{
          console.log('not logged in');
          isLoggedIn = false;
      }
    })

    this.props.init({app: app, auth: auth, db: db, logged: isLoggedIn});

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (obj) => {dispatch(Init(obj))}
  }
}
export default connect(null, mapDispatchToProps)(App);