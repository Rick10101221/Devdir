import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import profileReducer from './reducers/profileReducer';
import navReducer from './reducers/navReducer';
import searchReducer from './reducers/searchReducer';
import chatReducer from './reducers/chatReducer';
import dbReducer from './reducers/dbReducer';

let combined = combineReducers({
  profile: profileReducer,
  nav: navReducer,
  search: searchReducer,
  chat: chatReducer,
  db: dbReducer
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