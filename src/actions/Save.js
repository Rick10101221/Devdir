// Action made to save profile

const Save = (query) => {
  return {
    type: 'SAVE',
    payload: query
  };
}

export default Save;