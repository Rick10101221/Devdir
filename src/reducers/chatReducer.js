let initState = {
  chatHistory: [],
  conversations: []
}

const chatReducer = (state = initState, action) => {
  switch(action.type){
    case 'SEND':
      return {
        ...state,
        chatHistory: action.payload
      }

    default:
      return state    
  }
}

export default chatReducer;