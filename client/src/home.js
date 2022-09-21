import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import USMap from "./geojson_data/us-states.json";

import "./home.css";

const Home = (props) => {
  let state_style = {
    weight: 0.8,
    fillColor: "lightgreen",
    color: "green",
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid style={{ paddingLeft: "2%" }}>
          <Navbar.Brand href="/">
            <h1 style={{ fontSize: 20 }}>Home</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <MapContainer
          style={{ height: "93.5vh" }}
          center={[38, -100]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <h1 style={{ textAlign: "center", fontSize:"50px", fontFamily:"Patrick Hand SC"}}>Select a State</h1>
          <GeoJSON style={state_style} data={USMap.features} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
