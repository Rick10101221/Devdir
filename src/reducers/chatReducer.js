let initState = {
  chatHistory: [],
  conversations: []
}

const navReducer = (state = initState, action) => {
  switch(action.type){
    case 'SEND':
      return {
        ...state,
        chatHistory: action.payload
      }
      break;

    default:
      return state    
  }
}

export default navReducer;