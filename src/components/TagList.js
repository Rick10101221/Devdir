import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Skills from '../SkillSet';

export default function TagList() {
  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions]);

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue);
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
        <TextField {...params} variant="outlined" placeholder="Search Skill" multiline rows={1} />
      )}
    />
  );
}