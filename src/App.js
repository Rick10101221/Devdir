import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div id="App">
    <script defer src="/__/firebase/7.21.1/firebase-app.js"></script>
    <script defer src="/__/firebase/7.21.1/firebase-auth.js"></script>
    <script defer src="/__/firebase/7.21.1/firebase-database.js"></script>
    <script defer src="/__/firebase/7.21.1/firebase-messaging.js"></script>
    <script defer src="/__/firebase/7.21.1/firebase-storage.js"></script>
    <script defer src="/__/firebase/init.js"></script>
    <script defer src="firebase/login.js"></script>
    <script defer src="firebase/profile.js"></script>
    <script defer src="firebase/swipe.js"></script>
    <script defer src="firebase/search.js"></script>
    <script defer src="firebase/chatrooms.js"></script>
      <Dashboard/>
    </div>
  );
}

export default App;