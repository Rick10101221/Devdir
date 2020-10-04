let initState = {
  chatHistory: [],
  conversations: [],
  chatIdx: -1,
  keys: []
}

const chatReducer = (state = initState, action) => {
  switch(action.type){
    case 'CLEAR':
          console.log('clear');
          return {
            ...state,
            conversations: []
          }

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

      case 'FRESH':
        let convoN = state.conversations;
        convoN[action.idx] = action.payload;
        return{
          ...state,
          conversations: convoN
        }
      
      case 'VIEW':
        return{
          ...state,
          chatIdx: action.payload
      }

      case 'KEYS':
        let keys = state.keys;
        keys.push(action.payload);
        return{
          ...state,
          keys: keys
      }

    default:
      return state    
  }
}

export default chatReducer;