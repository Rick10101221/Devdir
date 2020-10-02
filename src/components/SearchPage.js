import React from 'react'
import TagList from './TagList.js'
import SkillSet from '../SkillSet.js'

class SuggList extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <div>
        
      </div>
    )
  }
}

// Search screen (Skills list, toggles)
export default class SearchPage extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  keyDown = (e) => {
    if (e.key !== 'null') {
      console.log('do validate');
    }
  }

  render(){
    return(
        <div>
          <h1>What skills are you looking for today?</h1>
          <input type="text" id="search" onKeyDown={this.keyDown}/>
          <SuggList/>
          <input type="button" value="Search" id="submit"/>
        </div>
    );
    for(let i = 0; i < SkillSet.length; i++){
      if(SkillSet[i].indexOf() != -1){

      }
    }
  }
}