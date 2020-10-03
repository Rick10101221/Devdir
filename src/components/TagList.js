import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skills from '../SkillSet';
import {useDispatch, useSelector} from 'react-redux';
import Result from '../actions/Result';
import Search from '../actions/Search';

export default function TagList() {
  const searchSelector = useSelector(state => state.search.search);
  const dispatch = useDispatch();
  const fixedOptions = [];
  const [value, setValue] = React.useState([...searchSelector]);

  function handleSearch(e){
    if(e.key === 'Enter' && searchSelector.length !== 0){
      // Search here
      
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