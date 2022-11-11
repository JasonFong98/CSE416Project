// import { useState } from "react";
import Map from "./map";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from "react-router-dom";
import { popup } from "leaflet";


const Home = () => {
  const navigate = useNavigate();
  const handleMenu = event => {
    const stateName = event.currentTarget.textContent
    navigate(`/home/${stateName}`);
  }
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
      <div id="state-menu">
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <MuiButton variant="contained" {...bindTrigger(popupState)}>
                  Select a state
              </MuiButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={handleMenu}>Florida</MenuItem>
                  <MenuItem onClick={handleMenu}>North Carolina</MenuItem>
                  <MenuItem onClick={handleMenu}>Ohio</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
      </div>
    </div>
  );
};

export default Home;
