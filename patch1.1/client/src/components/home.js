// import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="hr-bill-container">
        <Card id="hr-bill">
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
            <Button id="learn-more-button"
              variant="primary"
              href="https://www.congress.gov/bill/117th-congress/house-bill/3863/text?fbclid=IwAR1ne_vtNxnGGI-8j_guBbrO0CBzTMyY8WSz46Qurqoqg5az_hx3P6h6MnM#toc-H826C310F12F649F0B6A1120600D0DE8C"
              target="_blank"
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div id="home-map-container">
      </div>
    </div>
  );
};

export default Home;
