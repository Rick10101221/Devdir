import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import mail from '../media/mail.png';
import {connect} from 'react-redux';
import Edit from '../actions/Edit';

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

  render(){
    let i = 0;
    let links = this.state.links.map( link => {
      return <Link data={link} key={'key' + i++}/>
    });

    return(
      <div id="profile-display">
        
        <h3>{this.props.name}</h3>
        <p>{this.props.bio}</p>

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
    name: state.name,
    bio: state.bio,
    link: state.link,
    skill: state.skill
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    edit: () => {dispatch(Edit())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDisplay);