import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1 , minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Select Plans</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Select Plans"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Extreme Republican Seat Split</MenuItem>
        <MenuItem value={20}>Extreme Democratic Seat Split</MenuItem>
        <MenuItem value={30}></MenuItem>
      </Select>
    </FormControl>
  );
}
