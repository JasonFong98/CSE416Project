import React, { useState } from "react";
import Map from "./../Map.js";
import { MapContainer } from "react-leaflet";
import CottageIcon from "@mui/icons-material/Cottage";
import Button from "@mui/material/Button";

const Ohio = (props) => {
  const handleHome = () => {
    props.handleHome("home");
  };

  return (
    <div>
      <div
        style={{
          width: "45%",
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
          Ohio
        </h1>
      </div>
      <div
        style={{
          width: "55%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}
      >
        <MapContainer
          style={{ height: "93.5vh" }}
          center={[40.5, -82.5]}
          zoom={7}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <Map state={"Ohio"} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Ohio;
