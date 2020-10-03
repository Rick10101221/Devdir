// Action made to cancel profile edits

const Search = (query) => {
  return {
    type: 'SEARCH',
    payload: query
  };
}

export default Search;