import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {MapContainer,GeoJSON} from "react-leaflet";

import USMap from "./geojson_data/tl_2021_us_state.json"

import "./home.css";

const Home = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid style={{ paddingLeft: "2%" }}>
          <Navbar.Brand href="/">
            <h1 style={{ fontSize: 20 }}>Home</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h1 style={{ textAlign: "center" }}>H.R. 3863</h1>
      <MapContainer style={{height:"60vh"}} center={[45,-85]} zoom={4}>
        <GeoJSON data={USMap.features}/>
      </MapContainer>
    </div>
  );
};

export default Home;
