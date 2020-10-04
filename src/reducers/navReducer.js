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

      case 'GOSEARCH':
      return {
        ...state,
        chatting: false
      }

    default:
      return state    
  }
}

export default navReducer;