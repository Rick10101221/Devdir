let initState = {
  app: {},
  auth: {},
  db: {},
  logged: false
}

const dbReducer = (state = initState, action) => {
  switch(action.type){
    case 'INIT':
      return {
        ...state,
        app: action.payload.app,
        auth: action.payload.auth,
        db: action.payload.db,
        logged: action.payload.logged
      }

    default:
      return state    
  }
}

export default dbReducer;