import * as React from 'react';
import {useState, useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { GlobalStoreContext } from "../../store/store";
import CardPlans from './cardPlans';
import { Card } from '@mui/material';

export default function samplePlansMenu({clearToggleButton}) {
  const [plan, setPlan] = React.useState("");
  const [planAlignment, setPlanAlignment] = useState("DisplayMap");
  const {store}  = useContext(GlobalStoreContext);

  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  
  const handleMapChange = (event, newPlanAlignment) => {
    setPlanAlignment(newPlanAlignment);
    clearToggleButton();
  };


  return (
    <div>
    <FormControl sx={{ m: 1 , minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Select Plan</InputLabel>
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
        <MenuItem value={6}>{store.mmd1} Extreme Republican</MenuItem>
        <MenuItem value={7}>{store.mmd1} Extreme Democratic</MenuItem>
        <MenuItem value={8}>{store.mmd1} Least # of Majority Minority District</MenuItem>
        <MenuItem value={9}>{store.mmd1} Most # of Majority Minority District</MenuItem>
        <MenuItem value={10}>{store.mmd1} Average Plan</MenuItem>
        <MenuItem value={11}>{store.mmd2} Extreme Republican</MenuItem>
        <MenuItem value={12}>{store.mmd2} Extreme Democratic</MenuItem>
        <MenuItem value={13}>{store.mmd2} Least # of Majority Minority District</MenuItem>
        <MenuItem value={14}>{store.mmd2} Most # of Majority Minority District</MenuItem>
        <MenuItem value={15}>{store.mmd2} Average Plan</MenuItem>
      </Select>
    </FormControl>

    <ToggleButtonGroup
        style={{position:"relative", left:"5%", paddingBottom:"2%"}}
        color="warning"
        value={planAlignment}
        exclusive
        onChange={handleMapChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value="DisplayMap"><b>Display Map</b></ToggleButton>
      </ToggleButtonGroup>

      <CardPlans value={plan}/>
    </div>
  );
}
