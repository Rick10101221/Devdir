import React from 'react';

// Represents a chat between 2 people, to be listed
export default class ChatRoom extends React.Component{

  handleClick = () => {
    // TODO load chat history
  }

  render(){
    return(
      <div className="room" onClick={this.handleClick}>
        <p>Name, Name</p>
      </div>
    );
  }
}