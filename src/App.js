import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Init from './firebase/init.js';
import Login from './firebase/login.js';

function App() {
  return (
    <div id="App">
      <Init/>
      <Login/>
      <Dashboard/>
    </div>
  );
}

export default App;