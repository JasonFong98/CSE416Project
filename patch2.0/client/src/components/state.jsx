import {useState, useContext, useEffect} from 'react';
import CottageIcon from "@mui/icons-material/Cottage";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import VerticalTabs from "../components/verticalTabs";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStoreContext } from "../store/store";
import apis from '../api/api';
import DistrictData from './DistrictData';

const State = (props) => {
  const navigate = useNavigate();
  const [alignment, setAlignment] = useState("Enacted Plan");
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const state=useParams().id;
  const {store}  = useContext(GlobalStoreContext);

  useEffect(() => {
    apis.getMMDBoxAndWhiskers(stateDict[state]).then((res) => {
      store.setMMDPlan(res.data[0][0].pattern, res.data[1][0].pattern);
    });
  },[state]);

  function handleHome(){
    navigate('/')
    window.location.reload(false);
  }
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    store.setStateMap(newAlignment);
  };

  return (
    <div>
      <div id="state-top-banner">
        <Button
          id="home-button"
          onClick={handleHome}
          variant="contained"
          size="large"
        >
          <CottageIcon />
        </Button>

        <Box 
          id="state-name"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              height: 60,
              paddingLeft: "5%",
              paddingRight: "5%",
              inlineSize: "max-content"
            },
          }}
        >
          <Paper elevation={3}>{state}</Paper>
        </Box>

        <VerticalTabs state={state}/>
      </div>
      <div id="state-map-container">
      <ToggleButtonGroup
        id="map-toggle-button"
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        size="large"
        aria-label="Platform"
      >
        <ToggleButton sx={{textTransform:"none"}} value="Enacted Plan"><b>Enacted Plan</b></ToggleButton>
        <ToggleButton sx={{textTransform:"none"}} value="mmd1"><b>Average {store.mmd1} Plan</b></ToggleButton>
        <ToggleButton sx={{textTransform:"none"}} value="mmd2"><b>Average {store.mmd2} Plan</b></ToggleButton>
      </ToggleButtonGroup>
      </div>

      <div id="MMD-info">
          <DistrictData/>
      </div>
    </div>
  );
};

export default State;
