// Action made to search devs

const Search = (query) => {
  return {
    type: 'SEARCH',
    payload: query
  };
}

export default Search;