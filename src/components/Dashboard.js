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
    let button = this.props.chatting ?
    (<Tooltip title="Go to search">
    <IconButton
    variant="contained"
    color="primary"
    id="nav-button"
    size="medium"
    children={<SearchIcon/>}
    onClick={this.props.goSearch}
    ></IconButton></Tooltip>)
    :
    (<Tooltip title="Go to messages">
    <IconButton
    variant="contained"
    color="primary"
    id="nav-button"
    size="medium"
    children={<ChatIcon/>}
    onClick={this.props.goChat}
    ></IconButton></Tooltip>);

    let page = this.props.chatting ?
    <ChatPage/>:
    <SearchPage/>

    return(
      <div id="dashboard">
        {button}

        <Profile/>
        
        <div id="workspace">
          {page}
          
        </div>
        
      </div>
    );
  }

  onComponentDidMount(){
    // TODO firebase get profile
    // TODO firebase get conversations
    // TODO firebase refresh messages from conversations[0]
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