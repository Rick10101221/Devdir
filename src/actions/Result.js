// Action made to display results

const Result = (query) => {
  return {
    type: 'RESULT',
    payload: query
  };
}

export default Result;