import React from 'react';
import ChatRoom from './ChatRoom';
import ChatMessage from './ChatMessage';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Send from '../actions/Send';

// Chat page, with list of chats and conversation history
class Chat extends React.Component{

  handleKey = (e) => {
    if( e.key === 'Enter'){
      // Call send message
      // Recieve messages
      // Re-render messages
    }
  }

  render(){
    return(
      <div id="chat">

        <div id="chat-list">
          <ChatRoom/>
          <ChatRoom/>
 
          <p>--- No more conversations ---</p>
        </div>

        <div id="conversation">

          <h3 id="chat-heading">Name, Name</h3>

          <div id="chat-history">
            <div id="chat-history-container">
              <p>--- Beginning of chat history ---</p>
              <ChatMessage/>
              <ChatMessage/>
            </div>
          </div>

          <div id="chat-inputs">
            <TextField id="message-input" label="Message" variant="filled" fullWidth="true" multiline rows={2} onKeyDown={this.handleKey}/>
          </div>
          
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    conversations: state.chat.conversations,
    chatHistory: state.chat.chatHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    send: () => {dispatch(Send())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);