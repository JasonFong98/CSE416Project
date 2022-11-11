import CottageIcon from "@mui/icons-material/Cottage";
import Button from "@mui/material/Button";
import VerticalTabs from "../components/verticalTabs";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate, useParams } from "react-router-dom";

const State = (props) => {
  const navigate = useNavigate();
  const params=useParams();
  const state = params.state;
    
  function handleHome(){
    navigate('/')
    window.location.reload(false);
  }

  function handleReset(){
    window.location.reload(false);
  }

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

        <VerticalTabs />
      </div>
      <div id="state-map-container">
      </div>
    </div>
  );
};

export default State;
