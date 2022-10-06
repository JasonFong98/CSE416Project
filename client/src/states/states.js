import React from 'react';
import Map from "./../Map.js";
import { MapContainer } from "react-leaflet";
import CottageIcon from "@mui/icons-material/Cottage";
import Button from "@mui/material/Button";
import VerticalTabs from "./../verticalTabs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const States = (props) => {

    //let stateName = {"OH": "Ohio", "NC": "North Carolina", "FL": "Florida"};
    let stateCord = {"Ohio": [40.5, -82.5], "North Carolina": [36, -80], "Florida": [28, -84]};
    let state = props.state;
    console.log(state);
    console.log(stateCord[state]);

  const handleHome = () => {
    props.handleHome("home");
  };

  const [view, setView] = React.useState("smd");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <div>
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "fixed",
          left: 0,
          backgroundColor: "#E8F4F8",
        }}
      >
        <Button
          onClick={handleHome}
          variant="contained"
          style={{ position: "relative", left: "1%" }}
        >
          <CottageIcon />
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
          {state}
        </h1>

        <VerticalTabs />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}
      >
        <MapContainer
          style={{ height: "93.5vh"}}
           center={stateCord[state]}
           zoom={7}
          scrollWheelZoom={false}
          zoomControl={false}

        >
          <Map state={state} />
          <ToggleButtonGroup
            orientation="vertical"
            color="primary"
            value={view}
            exclusive
            onChange={handleChange}
            style={{position:"absolute", right:"2%", top:"40%", boxShadow:"2px 2px 2px 0px", backgroundColor:"white"}}
          >
            <ToggleButton value="smd" ><b>Single Member District</b></ToggleButton>
            <ToggleButton value="mmd"><b>Multi Member District</b></ToggleButton>
          </ToggleButtonGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default States;
