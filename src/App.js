import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {connect} from 'react-redux';
import Init from './actions/Init';
import Load from './actions/Load';

var isLoggedIn = false;

class App extends React.Component {

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
    let getProfile = require('./firebase/profile.js').getProfile;
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
    
   

    auth.onAuthStateChanged(async firebaseUser => {
      if(firebaseUser) {
          //reroute to dashboard
          isLoggedIn = true;
          user = firebaseUser;
          this.props.init({app: app, auth: auth, db: db, logged: isLoggedIn, user: firebaseUser});
          let profile =  await getProfile(db, user);
          profile.skill = profile.skill.map( (skill) => {return {title: skill}});
          this.props.load(profile);
          
          db.ref(`profile/${user.uid}`).on('value', snapshot => {
            profile = snapshot.val();
            db.ref(`chatrooms/${profile.chat[profile.chat.length - 1]}`).on('value', snapshot => 
            this.props.convos(snapshot.val()));
          })

          for( let i = 0; i < profile.chat.length - 1; i++){
            db.ref(`chatrooms/${profile.chat[i]}`).on('value', snapshot => 
            this.props.convos(snapshot.val()));
          }


        } else{
          console.log('not logged in');
          isLoggedIn = false;
      }
    })
    this.props.init({app: app, auth: auth, db: db, logged: isLoggedIn, user: user});

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (obj) => {dispatch(Init(obj))},
    load: (obj) => {dispatch(Load(obj))},
    convos: (obj) => {dispatch({type:'CONVOS', payload: obj})}
  }
}
export default connect(null, mapDispatchToProps)(App);