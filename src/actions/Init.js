// Action made to connect to db

const Init = (query) => {
  return {
    type: 'INIT',
    payload: query
  };
}

export default Init;