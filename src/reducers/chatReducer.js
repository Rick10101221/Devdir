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

      case 'CONVOS':
        let convo = state.conversations;
        convo.push(action.payload);
        return{
          ...state,
          conversations: convo
        }

    default:
      return state    
  }
}

export default chatReducer;