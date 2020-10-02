let initState = {
  chatting: false
}

const navReducer = (state = initState, action) => {
  switch(action.type){
    case 'GOCHAT':
      return {
        ...state,
        chatting: true
      }
      break;

      case 'GOSEARCH':
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