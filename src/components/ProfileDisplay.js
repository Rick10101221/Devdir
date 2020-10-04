import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';
import {connect} from 'react-redux';
import Edit from '../actions/Edit';
import Status from '../actions/Status';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

var i = 0;
// Displays profile
class ProfileDisplay extends React.Component{

  handleStatus = (e) =>{
    // TODO firebase update profile
    this.props.status(e.target.value);
  }

  render(){
    
    let skills = this.props.skill.map((skill) => {
      console.log(skill);
      console.log(skill.title);
      return <Chip key={'skill' + i} label={skill.title} color="primary"/>
    });
    console.log(skills);
    return(
      <div id="profile-display">

        <div id="profile-title">
          
          <h3>{this.props.name}</h3>
          <FormControl>
            <Select
              value={this.props.active}
              onChange={this.handleStatus}
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>

        </div>
        <pre>{this.props.bio}</pre>

        <div id="profile-display-skills">
          {skills}
        </div>

        <div id="profile-display-links">
          <div className="display-link">
            <img src={github} alt="icon" width="32px"/>
            <a href={this.props.link[0]}>{this.props.link[0]}</a>
          </div>
          <div className="display-link">
            <img src={linkedin} alt="icon" width="32px"/>
            <a href={this.props.link[1]}>{this.props.link[1]}</a>
          </div>
          <div className="display-link">
            <img src={mail} alt="icon" width="32px"/>
            <a href={this.props.link[2]}>{this.props.link[2]}</a>
          </div>
        </div>

        <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<EditIcon/>}
        onClick={this.props.edit}
        >
        Edit
        </Button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.profile.name,
    bio: state.profile.bio,
    link: state.profile.link,
    skill: state.profile.skill,
    active: state.profile.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    edit: () => {dispatch(Edit())},
    status: (status) => {dispatch(Status(status))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDisplay);