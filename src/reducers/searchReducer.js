let initState = {
  search: [],
  results: [],
}

const navReducer = (state = initState, action) => {
  switch(action.type){
    case 'SEARCH':
      return {
        ...state,
        search: action.payload
      }
      break;

    case 'RESULT':
      return {
        ...state,
        results: action.payload
      }
      break;

    case 'REJECT':
      let newRes = state.results;
      newRes.shift();
      return {
        ...state,
        results: newRes
      }
      break;

    case 'ACCEPT':
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