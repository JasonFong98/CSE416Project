import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {MapContainer,GeoJSON} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import USMap from "./geojson_data/us-states.json";

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
      <div style={{width:"50%", height:"70%", position:"relative", left:"25%", backgroundColor: "white"}}>
        <MapContainer style={{height:"60vh"}} center={[35,-90]} zoom={4} scrollWheelZoom={false}>
            <GeoJSON data={USMap.features}/>
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
