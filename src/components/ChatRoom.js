import React from 'react';
import {connect} from 'react-redux';

// Represents a chat between 2 people, to be listed
class ChatRoom extends React.Component{

  handleClick = () => {
    // TODO load chat history
    this.props.view(this.props.c);

  }

  render(){
    return(
      <div className="room" onClick={this.handleClick}>
        <p>{this.props.a}, {this.props.b}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    view: (idx) => {dispatch({type:'VIEW', payload: idx})}
  }
}

export default connect(null, mapDispatchToProps)(ChatRoom);