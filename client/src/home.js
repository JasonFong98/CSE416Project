import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./home.css";
import USMap from "./geojson_data/us-states.json";

const Home = (props) => {
  let chosen_states=["Florida","Ohio","North Carolina"]
  let state_style = {
    weight: 0.8,
    fillColor: "lightgreen",
    color: "green",
  };
  const onEachState = (state, layer) => {
    console.log(state.properties.name);
    if (chosen_states.includes(state.properties.name)) {
      layer.setStyle({
        color: "yellow",
        fillColor: "yellow",
        fillOpacity:"0.8",
      });
    }
    layer.bindPopup(state.properties.name);
    layer.on({
      click: (event) => {
        event.target.setStyle({
          color: "red",
          fillColor: "red",
          opacity: "2.0",
        });
      },
      mouseout: (event) => {
        if (chosen_states.includes(state.properties.name) ) {
          event.target.setStyle({
            color: "yellow",
            fillColor: "yellow",
            fillOpacity: "4.0",
          });
        } else {
          event.target.setStyle({
            color: "green",
            fillColor: "lightgreen",
          });
        }
        layer.closePopup();
      },
      mouseover: (event) => {
        event.target.setStyle({
          color: "yellow",
          fillColor: "yellow",
          opacity: "2.0",
        });

        event.target.setStyle({
          color: "red",
          fillColor: "red",
          opacity: "2.0",
        });

        layer.openPopup();
      },
    });
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
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontFamily: "Patrick Hand SC",
            }}
          >
            Select a State
          </h1>
          <GeoJSON
            onEachFeature={onEachState}
            style={state_style}
            data={USMap.features}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
