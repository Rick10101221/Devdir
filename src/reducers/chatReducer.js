let initState = {
  chatHistory: [],
  conversations: []
}

const navReducer = (state = initState, action) => {
  switch(action.type){
    case 'SEND':
      return {
        ...state,
        chatting: true
      }
      break;

      case 'SWITCH':
      return {
        ...state,
        chatting: false
      }
      break;

    default:
      return state    
  }
}

export default navReducer;