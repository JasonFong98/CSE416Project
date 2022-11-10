import CottageIcon from "@mui/icons-material/Cottage";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from "@mui/material/Button";
import VerticalTabs from "../components/verticalTabs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Map from "./map";

const State = (props) => {
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
          // onClick={handleHome}
          variant="contained"
          style={{ position: "relative", left: "1%", width:"8%"}}
          size="large"
        >
          <CottageIcon />
        </Button>

        <Button
          // onClick={handleHome}
          variant="contained"
          style={{ position: "relative", left: "2%", width:"8%"}}
          color="warning"
          size="large"
        >
          <RestartAltIcon />
        </Button>
        <h1
          style={{
            position: "relative",
            left: "2%",
            top: "1%",
            display: "inline-block",
            fontSize: "35px",
            letterSpacing: " 4px",
          }}
        >
          {/* {state} */}
        </h1>

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
