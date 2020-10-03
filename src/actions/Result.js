// Action made to cancel profile edits

const Result = (query) => {
  return {
    type: 'RESULT',
    payload: query
  };
}

export default Result;