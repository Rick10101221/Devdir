// Action made to cancel profile edits

const Status = (query) => {
  return {
    type: 'STATUS',
    payload : query
  };
}

export default Status;