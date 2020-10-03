var firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

let app = require("init.js").app;
let init = require("init.js").init;

var app = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
});
var init = firebase.initializeApp(config);

module.export = {app: app, init: init};
