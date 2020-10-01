let initState = {
  editProfile: false,
  name: '',
  bio: '',
  link: ['','',''],
  skill: [''],
  chat: []
}

const profileReducer = (state = initState, action) => {
  switch(action.type){
    case 'SAVE':
      return {
        ...state,
        editProfile: false
      }
      break;

    case 'EDIT':
      return {
        ...state,
        editProfile: true
      }
      break;
    
    case 'Load':
      return{
        ...state,
        name: action.payload.name,
        bio: action.payload.bio,
        link: action.payload.link,
        skill: action.payload.skill,
        chat: action.payload.chat,
      }

    default:
      return state    
  }
}

export default profileReducer;