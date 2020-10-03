import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Init from './firebase/Init';

function App() {
  return (
    <div id="App">
      <Init/>
      <Dashboard/>
    </div>
  );
}

export default App;