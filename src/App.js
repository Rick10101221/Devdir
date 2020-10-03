import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  render(){
    return (
      <div id="App">
        <Dashboard/>
      </div>
    );
  }

  componentDidiMount(){
    // TODO firebase get profile
    // TODO firebase get conversations
    // TODO firebase refresh messages from conversations[0]
  }
}

export default App;