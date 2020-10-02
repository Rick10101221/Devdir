import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';
import {connect} from 'react-redux';
import Edit from '../actions/Edit';
import Status from '../actions/Status';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// Links
function Link(props) {
  return (
    <div className="display-link">
      <img src={props.data.icon} alt="icon" width="32px"/>
      <a href={props.data.link}>{props.data.link}</a>
    </div>
  );
}

// Displays profile
class ProfileDisplay extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      links: [
        {
          icon: github,
          link: props.link[0]
        },
        {
          icon: linkedin,
          link: props.link[1]
        },
        {
          icon: mail,
          link: props.link[2]
        }
      ]
    };
  }

  handleStatus = (e) =>{
    this.props.status(e.target.value);
  }

  render(){
    let i = 0;
    let links = this.state.links.map( link => {
      return <Link data={link} key={'key' + i++}/>
    });

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
          {/* Material UI Chips here */}
        </div>

        <div id="profile-display-links">
          {links}
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