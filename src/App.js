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
        console.log('run');
          //reroute to dashboard
          isLoggedIn = true;
          user = firebaseUser;
          this.props.init({app: app, auth: auth, db: db, logged: isLoggedIn, user: firebaseUser});
          let profile =  await getProfile(db, user);
          profile.skill = profile.skill.map( (skill) => {return {title: skill}});
          this.props.load(profile);
          
          db.ref(`profile/${user.uid}`).on('value', snapshot =>{ 
            console.log('hear');
            this.props.cls();
            for( let i = 0; i < profile.chat.length; i++){
              db.ref(`chatrooms/${profile.chat[i]}`).on('value', snapshot => {
                let refresh = false
                for( let j = 0; j < this.props.getKeys.length; j++){
                  if (this.props.getKeys[j] === profile.chat[i]){
                    refresh = true;
                  }
                }
                if(!refresh){
                  this.props.convos(snapshot.val());
                  this.props.keys(profile.chat[i]);
                  this.props.chatIdx(0);
                }else{
                  this.props.fresh(snapshot.val(), i);
                }
              });
            }
          });

        } else{
          console.log('not logged in');
          isLoggedIn = false;
      }
    })
    this.props.init({app: app, auth: auth, db: db, logged: isLoggedIn, user: user});

  }
}

const mapStateToProps = (state) => {
  return{
    getKeys: state.chat.keys,
    idx: state.chat.chatIdx
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (obj) => {dispatch(Init(obj))},
    load: (obj) => {dispatch(Load(obj))},
    convos: (obj) => {dispatch({type:'CONVOS', payload: obj})},
    fresh: (obj,idx) => {dispatch({type:'FRESH', payload: obj,idx: idx})},
    chatIdx: (x, i) => {dispatch({type:'VIEW', payload: x, idx: i})},
    keys: (x) => {dispatch({type:'KEYS', payload: x})},
    cls: () => {dispatch({type:'CLEAR'})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);