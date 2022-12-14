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

export default function samplePlansMenu(props) {
  const [plan, setPlan] = React.useState("");
  const [planAlignment, setPlanAlignment] = useState("");
  const {store}  = useContext(GlobalStoreContext);

  const handleChange = (event) => {
    setPlan(event.target.value);
    props.state.clearToggleButton();
    setPlanAlignment("DisplayMap");
  };

  
  const handleMapChange = (event, newPlanAlignment) => {
    setPlanAlignment(newPlanAlignment);
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
        <MenuItem value="smdExRep">SMD Extreme Republican</MenuItem>
        <MenuItem value="smdExDem">SMD Extreme Democratic </MenuItem>
        <MenuItem value="smdRand">SMD Random Plan</MenuItem>
        <MenuItem value="smdLeastMaj">SMD Least # of Majority Minority District</MenuItem>
        <MenuItem value="smdMostMaj">SMD Most # of Majority Minority District</MenuItem>
        <MenuItem value="mmdExRep1">{store.mmd1} Extreme Republican</MenuItem>
        <MenuItem value="mmdExDem1">{store.mmd1} Extreme Democratic</MenuItem>
        <MenuItem value="mmdLeastMaj1">{store.mmd1} Least # of Majority Minority District</MenuItem>
        <MenuItem value="mmdMostMaj1">{store.mmd1} Most # of Majority Minority District</MenuItem>
        <MenuItem value="mmdAvg1">{store.mmd1} Average Plan</MenuItem>
        <MenuItem value="mmdExRep2">{store.mmd2} Extreme Republican</MenuItem>
        <MenuItem value="mmdExDem2">{store.mmd2} Extreme Democratic</MenuItem>
        <MenuItem value="mmdLeastMaj2">{store.mmd2} Least # of Majority Minority District</MenuItem>
        <MenuItem value="mmdMostMaj2">{store.mmd2} Most # of Majority Minority District</MenuItem>
        <MenuItem value="mmdAvg2">{store.mmd2} Average Plan</MenuItem>
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

      <CardPlans value={plan} state={props.state}/>
    </div>
  );
}
