import React from 'react';
import ChatRoom from './ChatRoom';
import ChatMessage from './ChatMessage';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Send from '../actions/Send';

var i = 0;
// Chat page, with list of chats and conversation history
class Chat extends React.Component{

  handleKey = (e) => {
    if( e.key === 'Enter') {
      // TODO send message
      // TODO refresh messages
    }
  }

  render(){

    let convos = this.props.conversations.map((c)=>{
      return <ChatRoom a={c.names.user1} b={c.names.user2} key={'con'+i}/>
    });

    let ob = this.props.conversations[0].chat;
    console.log(this.props.conversations[0].chat);
    let mess = [];
    for (const [key, value] of Object.entries(ob)){
      mess.push(<ChatMessage author={value.author} mess={value.message} key={key + i++}/>);
    }

    return(
      <div id="chat">

        <div id="chat-list">
          {convos}
          <p>--- No more conversations ---</p>
        </div>

        <div id="conversation">

          <h3 id="chat-heading">Name, Name</h3>

          <div id="chat-history">
            <div id="chat-history-container">
              <p>--- Beginning of chat history ---</p>
              {mess}
            </div>
          </div>

          <div id="chat-inputs">
            <TextField id="message-input" label="Message" variant="filled" fullWidth={true} multiline rows={2} onKeyDown={this.handleKey}/>
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