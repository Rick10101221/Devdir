require('dotenv').config();
var firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

//console.log(process.env.apiKey);

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

export {
  app,
  auth,
  db
};