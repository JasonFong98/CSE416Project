import * as React from 'react';
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function SelectSmall({clearToggleButton}) {
  const [plan, setPlan] = React.useState('');
  const [planAlignment, setPlanAlignment] = useState();

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  
  const handlePlanChange = (event, newPlanAlignment) => {
    setPlanAlignment(newPlanAlignment);
    clearToggleButton();
  };

  return (
    <div>
    <FormControl sx={{ m: 1 , minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Select Plans</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={plan}
        label="Select Plans"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>SMD Extreme Republican</MenuItem>
        <MenuItem value={2}>SMD Extreme Democratic </MenuItem>
        <MenuItem value={3}>SMD Random Plan</MenuItem>
        <MenuItem value={4}>SMD Least # of Majority Minority District</MenuItem>
        <MenuItem value={5}>SMD Most # of Majority Minority District</MenuItem>
        <MenuItem value={6}>MMD- Extreme Republican</MenuItem>
        <MenuItem value={7}>MMD- Extreme Republican</MenuItem>
        <MenuItem value={8}>MMD- Extreme Democratic</MenuItem>
        <MenuItem value={9}>MMD- Extreme Democratic</MenuItem>
        <MenuItem value={10}>MMD- Least # of Majority Minority District</MenuItem>
        <MenuItem value={11}>MMD- Least # of Majority Minority District</MenuItem>
        <MenuItem value={12}>MMD- Most # of Majority Minority District</MenuItem>
        <MenuItem value={13}>MMD- Most # of Majority Minority District</MenuItem>
      </Select>
    </FormControl>

    <ToggleButtonGroup
        style={{position:"relative", left:"5%", paddingBottom:"2%"}}
        color="warning"
        value={planAlignment}
        exclusive
        onChange={handlePlanChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value=""><b>Display Map</b></ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
