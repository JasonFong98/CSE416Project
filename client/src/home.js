import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./home.css";

import Map from "./Map.js";

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
              style={{ position: "absolute", bottom: "8%" }}
              variant="primary"
              href="https://www.congress.gov/bill/117th-congress/house-bill/3863/text?fbclid=IwAR1ne_vtNxnGGI-8j_guBbrO0CBzTMyY8WSz46Qurqoqg5az_hx3P6h6MnM#toc-H826C310F12F649F0B6A1120600D0DE8C"
              target="_blank"
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
