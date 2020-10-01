import React from 'react';
import Profile from './Profile';
import SearchPage from './SearchPage';
import ChatPage from './ChatPage';

// Dashboard, will contain all subcomponents after login
export default class Dashboard extends React.Component{

  render(){
    return(
      <div id="dashboard">

        <Profile/>
        
        <div id="workspace">

        </div>
        
      </div>
    );
  }
}