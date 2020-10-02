import React from 'react';
import Profile from './Profile';
import SearchPage from './SearchPage';
import ChatPage from './ChatPage';
import {connect} from 'react-redux';
import GoChat from '../actions/GoChat';
import GoSearch from '../actions/GoSearch';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from "@material-ui/core/Tooltip";

// Dashboard, will contain all subcomponents after login
class Dashboard extends React.Component{

  render(){
    return(
      <div id="dashboard">
        {this.props.chatting ?
        <Tooltip title="Go to search">
        <IconButton
        variant="contained"
        color="primary"
        id="nav-button"
        size="medium"
        children={<SearchIcon/>}
        onClick={this.props.goSearch}
        title="Go to messages"
        ></IconButton></Tooltip>
        :
        <Tooltip title="Go to messages">
        <IconButton
        variant="contained"
        color="primary"
        id="nav-button"
        size="medium"
        children={<ChatIcon/>}
        onClick={this.props.goChat}
        ></IconButton></Tooltip>
        }

        <Profile/>
        
        <div id="workspace">
          {
            this.props.chatting ?
            <ChatPage/>:
            <SearchPage/>
          }
          
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    chatting: state.nav.chatting
  }
} 

const mapDispatchToProps = (dispatch) =>{
  return {
    goChat: () => {dispatch(GoChat())},
    goSearch: () => {dispatch(GoSearch())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)