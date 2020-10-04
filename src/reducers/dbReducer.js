let initState = {
  app: {},
  auth: {},
  db: {},
  logged: false,
  user: ''
}

const dbReducer = (state = initState, action) => {
  switch(action.type){
    case 'INIT':
      return {
        ...state,
        app: action.payload.app,
        auth: action.payload.auth,
        db: action.payload.db,
        logged: action.payload.logged,
        user: action.payload.user
      }

    default:
      return state    
  }
}

export default dbReducer;