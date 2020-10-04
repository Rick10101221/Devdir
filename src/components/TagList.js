import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skills from '../SkillSet';
import {useDispatch, useSelector} from 'react-redux';
import Result from '../actions/Result';
import Search from '../actions/Search';

let search = require('../firebase/search.js').search;

export default function TagList() {
  const searchSelector = useSelector(state => state.search.search);
  const db = useSelector(state => state.db.db);
  const dispatch = useDispatch();
  const fixedOptions = [];
  const [value, setValue] = React.useState([...searchSelector]);

  async function handleSearch(e){
    if(e.key === 'Enter' && searchSelector.length !== 0){
      // TODO search to results popup
      let searches =  searchSelector.map(search => {return search.title});
      let results = await search( searches, db);
      setValue([]);
      dispatch(Result(results));

    }
  }

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event, newValue) => {
        dispatch(Search(newValue));
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={Skills}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Search Skill" multiline rows={1} onKeyDown={handleSearch}/>
      )}
    />
  );
}