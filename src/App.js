import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
//import {app, auth, db} from './db/test';
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

class App extends React.Component {
  render(){
    return (
      <div id="App">
        <Router>
          <Switch>

            <Route path="/" exact>
              <Dashboard/>
            </Route>

            <Route path="/auth" exact>
              <Login/>
            </Route>

          </Switch>
        </Router>
        
      </div>
    );
  }

  componentDidMount(){
    console.log(app);
    console.log(auth);
    console.log(db);

    // TODO firebase check authenticated 
    // TODO firebase get profile
    // TODO firebase get conversations
    // TODO firebase refresh messages from conversations[0]
  }
}

export default App;