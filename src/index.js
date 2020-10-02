import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import profileReducer from './reducers/profileReducer';
import navReducer from './reducers/navReducer';

let combined = combineReducers({
  profile: profileReducer,
  nav: navReducer
});
let store = createStore( combined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);