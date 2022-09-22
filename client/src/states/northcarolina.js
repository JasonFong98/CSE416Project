import React, { useState } from "react";
import Map from "./../Map.js";
import { MapContainer } from "react-leaflet";

const NorthCarolina = (props) => {
  return (
    <div>
      <div style={{
          width: "45%",
          height: "100%",
          position: "fixed",
          left: 0,
          backgroundColor: "#E8F4F8",
        }}></div>
      <div style={{
          width: "55%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}>
        <h1 style={{
              position: "relative",
              left: "34%",
              top: "15%",
              fontSize: "45px",
              fontFamily: "Patrick Hand SC",
              letterSpacing: "1.5px",
            }}>North Carolina</h1>
        <MapContainer
          style={{ height: "93.5vh" }}
          center={[28, -88]}
          zoom={8}
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

export default NorthCarolina;