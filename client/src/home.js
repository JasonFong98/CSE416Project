import React, {useState,useRef,useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, GeoJSON,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./home.css";
import USMap from "./geojson_data/us-states.json";
import Florida from "./geojson_data/P000C0109.json";
import Ohio from "./geojson_data/oh_cong_adopted_2022.json";

const Home = (props) => {
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
        <Card
          style={{
            position: "relative",
            width: "70%",
            height: "60%",
            left: "10%",
            top: "20%",
          }}
        >
          <Card.Body>
            <Card.Title>H.R. 3863</Card.Title>
            <Card.Text>
              To establish the use of ranked choice voting in elections for
              Senators and Representatives in Congress, to require each State
              with more than one Representative to establish multi-member
              congressional districts, to require States to conduct
              congressional redistricting through independent commissions, and
              for other purposes.
            </Card.Text>
            <Button
                style={{position:"absolute", bottom: "8%"}}
              variant="primary"
              href="https://www.congress.gov/bill/117th-congress/house-bill/3863/text?fbclid=IwAR1ne_vtNxnGGI-8j_guBbrO0CBzTMyY8WSz46Qurqoqg5az_hx3P6h6MnM#toc-H826C310F12F649F0B6A1120600D0DE8C"
              target="_blank"
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
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
          center={[40, -95]}
          zoom={4}
          // zoomSnap={4.5}
          scrollWheelZoom={false}
          // zoomControl={false}
        >
          <h1
            style={{
              position: "relative",
              left: "34%",
              top: "15%",
              fontSize: "45px",
              fontFamily: "Patrick Hand SC",
              letterSpacing: "1.5px",
            }}
          >
            Select a State
          </h1>
          <HomeMap/>
        </MapContainer>
      </div>
    </div>
  );
};

const HomeMap=()=>{
  const [features,setFeatures]=useState(USMap.features);
  const map=useMap();
  let chosen_states = ["Florida", "Ohio", "North Carolina"];
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
        fillOpacity: "0.8",
      });
    }
    layer.bindPopup(state.properties.name);
    layer.on({
      click: (event) => {
        if (state.properties.name === "Florida") {
          setFeatures(Florida.features);
        }

        if (state.properties.name === "Ohio") {
            setFeatures(Ohio.features);
        }
        map.fitBounds(event.target.getBounds())
      },
      mouseout: (event) => {
        if (chosen_states.includes(state.properties.name)) {
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
          color: "darkgreen",
          fillColor: "darkgreen",
          opacity: "2.0",
        });

        layer.openPopup();
      },
    });
  };
  const geoJsonLayer = useRef();

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(features);
    }
  }, [geoJsonLayer, features]);
  return (<GeoJSON
    ref={geoJsonLayer}
    onEachFeature={onEachState}
    style={state_style}
    data={features}
  />);
}

export default Home;
