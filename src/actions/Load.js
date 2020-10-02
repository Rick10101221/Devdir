// Action made to load profile

const Load = (query) => {
  return {
    type: 'LOAD',
    payload: query
  };
}

export default Load;