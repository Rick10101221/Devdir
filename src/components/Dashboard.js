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

// Dashboard, will contain all subcomponents after login
class Dashboard extends React.Component{

  render(){
    return(
      <div id="dashboard">

        {this.props.chatting ?
        <IconButton
        variant="contained"
        color="primary"
        id="nav-button"
        size="medium"
        children={<SearchIcon/>}
        onClick={this.props.goSearch}
        ></IconButton>
        :
        <IconButton
        variant="contained"
        color="primary"
        id="nav-button"
        size="medium"
        children={<ChatIcon/>}
        onClick={this.props.goChat}
        ></IconButton>
        }

        <Profile/>
        
        <div id="workspace">

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