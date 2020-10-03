import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
var test = require('./db/test.js');

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

  componentDidiMount(){
    test();

    // TODO firebase get profile
    // TODO firebase get conversations
    // TODO firebase refresh messages from conversations[0]
  }
}

export default App;