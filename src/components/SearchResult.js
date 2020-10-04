import React from 'react';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';
import swipeLeft from '../media/swipeLeft.png'
import swipeRight from '../media/swipeRight.png'
import Chip from '@material-ui/core/Chip';
import {connect} from 'react-redux';
import Reject from '../actions/Reject';
import Accept from '../actions/Accept';
import GoChat from '../actions/GoChat';

var i = 0;
// A search result card
class SearchResult extends React.Component{


  handleLeft = () => {
    this.props.reject();
  }

  handleRight = () => {
    this.props.accept();
    this.props.gochat();
  }

  render(){
    if(this.props.count === 0){
      this.props.none();
      return null;
    }

    let skill = this.props.result[1].skill.map((skill) => {return <Chip label={skill} color="primary" key={i++}/>});

    return(
      <div id="overlay">
        <img id="swipeLeft" src={swipeLeft} onClick={this.handleLeft}/>
        <img id="swipeRight" src={swipeRight} onClick={this.handleRight}/>
        <div id="result">
          <h1 id="resultName">{this.props.result[1].name}</h1>
          <p id="resultBio">{this.props.result[1].bio}</p>
          <div id="profile-display-skills">
            {skill}
          </div>
          <div id="linkContainer">
            <img src={github} alt="#"/>
            <img src={linkedin} alt="#"/>
            <img src={mail} alt="#"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    result: state.search.results[0],
    count: state.search.results.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    reject: () => {dispatch(Reject())},
    accept: () => {dispatch(Accept())},
    gochat: () => {dispatch(GoChat())},
    none: () => {dispatch({type: 'NONE'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);