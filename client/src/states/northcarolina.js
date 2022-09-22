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
        }}><h1 style={{
          fontSize: "60px",
          letterSpacing: "1.5px",
        }}>North Carolina</h1></div>
      <div style={{
          width: "55%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}>
        
        <MapContainer
          style={{ height: "93.5vh" }}
          center={[35, -80]}
          zoom={7}
          // zoomSnap={4.5}
          scrollWheelZoom={false}
          zoomControl={false}
        >  
          <Map state={"North Carolina"} />
        </MapContainer>
      </div>
    </div>
  );
};

export default NorthCarolina;