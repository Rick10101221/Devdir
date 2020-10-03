import React from 'react';
import TagList from './TagList';

// Search screen (Skills list, toggles)
export default class SearchPage extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
        <div id="search">
          <h1>Find Developers.</h1>
          <TagList/>
        </div>
    );
  }
}