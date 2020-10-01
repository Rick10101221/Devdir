// Action representing user typing

const Load = (query) => {
  return {
    type: 'LOAD',
    payload: query
  };
}

export default Load;