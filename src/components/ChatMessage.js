import React from 'react';

// Chat message
export default class ChatMessage extends React.Component{

  render(){
    return(
      <div className="message">
        <h6>{this.props.author}</h6>
        <p className="message-content">{this.props.mess}</p>
      </div>
    );
  }
}