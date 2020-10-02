import React from 'react';
import ChatRoom from './ChatRoom';
import ChatMessage from './ChatMessage';
import TextField from '@material-ui/core/TextField';

// Chat page, with list of chats and conversation history
export default class Chat extends React.Component{

  render(){
    return(
      <div id="chat">

        <div id="chat-list">
          <ChatRoom/>
          <ChatRoom/>
          <ChatRoom/>
          <ChatRoom/>
          <ChatRoom/>
          <p>--- No more conversations ---</p>
        </div>

        <div id="conversation">

          <h3 id="chat-heading">Name, Name</h3>

          <div id="chat-history">
            <p>--- Beginning of chat history ---</p>
            <ChatMessage/>
            <ChatMessage/>
          </div>

          <div id="chat-inputs">
            <TextField id="message-input" label="Message" variant="filled" fullWidth="true"/>
          </div>
          
        </div>

      </div>
    );
  }
}