import CottageIcon from "@mui/icons-material/Cottage";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from "@mui/material/Button";
import VerticalTabs from "../components/verticalTabs";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
import Map from "./map";

const State = (props) => {
  const navigate = useNavigate();
  const params=useParams();
  const state = params.state;
    
  function handleHome(){
    navigate('/')
  }

  function handleReset(){
    window.location.reload(false);
  }

  return (
    <div>
      <div
        style={{
          width: "60%",
          height: "100%",
          position: "fixed",
          left: 0,
          backgroundColor: "#E8F4F8",
        }}
      >
        <Button
          onClick={handleHome}
          variant="contained"
          style={{ position: "relative", left: "1%", width:"15.5%"}}
          size="large"
        >
          <CottageIcon />
        </Button>

        <Box
          style={{
            position: "relative",
            left: "6.2%",
            top: "1%",
            display: "inline-block",
            fontSize: "40px",
            fontWeight: "bold",
            letterSpacing: " 4px",
            
          }}

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
      <div
        style={{
          width: "40%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}
      >
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default State;
