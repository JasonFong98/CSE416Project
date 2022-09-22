import React, { useState } from "react";
import Map from "./../Map.js";
import { MapContainer } from "react-leaflet";

const Ohio = (props) => {
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
        <h1
          style={{
            fontSize: "60px",
            fontFamily: "Patrick Hand SC",
            letterSpacing: "1.5px",
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
          center={[40.5, -83.5]}
          zoom={7}
          zoomSnap={7.5}
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
