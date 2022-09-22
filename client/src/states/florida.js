import React, { useState } from "react";
import Map from "./../Map.js";
import { MapContainer } from "react-leaflet";

const Florida = (props) => {
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
          Florida
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
          center={[28, -84]}
          zoom={7}
          // zoomSnap={4.5}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <Map state={"Florida"} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Florida;
