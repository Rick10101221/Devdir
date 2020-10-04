import React from 'react';
import ChatRoom from './ChatRoom';
import ChatMessage from './ChatMessage';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Send from '../actions/Send';

let send = require('../firebase/chatrooms.js').addMessage;

var i = 0;
// Chat page, with list of chats and conversation history
class Chat extends React.Component{

  handleKey = async (e) => {
    if( e.key === 'Enter') {
      // TODO send message
      send(this.props.keys[this.props.chatIdx], this.props.name, e.target.value, this.props.db)
      e.target.value = '';
    }
  }

  render(){

    let idx = 0;
    let convos = this.props.conversations.map((c)=>{
      return <ChatRoom a={c.names.user1} b={c.names.user2} c={idx++} key={'con'+i++}/>
    });

    let mess = [];
    if (this.props.chatIdx !== -1){
      let ob = this.props.conversations[this.props.chatIdx].chat;
      for (const [key, value] of Object.entries(ob)){
        mess.push(<ChatMessage author={value.author} mess={value.message} key={key + i++}/>);
      }
    }

    console.log(this.props);
    return(
      <div id="chat">

        <div id="chat-list">
          {convos}
          <p>--- No more conversations ---</p>
        </div>

        <div id="conversation">

          <h3 id="chat-heading">{this.props.conversations[this.props.chatIdx].names.user1}, {this.props.conversations[this.props.chatIdx].names.user2}</h3>

          <div id="chat-history">
            <div id="chat-history-container">
              <p>--- Beginning of chat history ---</p>
              {mess}
            </div>
          </div>

          <div id="chat-inputs">
            <TextField id="message-input" label="Message" variant="filled" fullWidth={true} multiline rows={2} onKeyUp={this.handleKey}/>
          </div>
          
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    conversations: state.chat.conversations,
    chatHistory: state.chat.chatHistory,
    chatIdx: state.chat.chatIdx,
    keys: state.chat.keys,
    name: state.profile.name,
    db: state.db.db
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    send: () => {dispatch(Send())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);