let initState = {
  editProfile: false,
  name: 'Some Dev',
  bio: 'bio goes here lorem ipsum dolor',
  link: ['https://github.com','https://linkedin.com','email.com'],
  skill: ['Firstname Lastname'],
  chat: [],
  active: false
}

const profileReducer = (state = initState, action) => {
  switch(action.type){
    case 'STATUS':
      return {
        ...state,
        active: action.payload
      }
      break;
    case 'CANCEL':
      return {
        ...state,
        editProfile: false
      }
      break;
    case 'SAVE':
      return {
        ...state,
        editProfile: false,
        name: action.payload.name,
        bio: action.payload.bio,
        link: action.payload.link,
        skill: action.payload.skill,
      }
      break;

    case 'EDIT':
      return {
        ...state,
        editProfile: true
      }
      break;
    
    case 'LOAD':
      return{
        ...state,
        name: action.payload.name,
        bio: action.payload.bio,
        link: action.payload.link,
        skill: action.payload.skill,
      }

    default:
      return state    
  }
}

export default profileReducer;