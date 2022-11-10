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


const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "35%",
          height: "100%",
          position: "fixed",
          left: 0,
          backgroundColor: "#E8F4F8",
        }}
      >
        <Card
          style={{
            position: "relative",
            width: "75%",
            height: "60%",
            left: "25%",
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
      <div
        style={{
          width: "65%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}
      >
      </div>
      <div
        style={{
          position: "absolute",
          left: "60.6%",
          top: "21%"
        }}
      >
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <MuiButton variant="contained" {...bindTrigger(popupState)}>
                  Select a state
              </MuiButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Florida</MenuItem>
                  <MenuItem onClick={popupState.close}>North Carolina</MenuItem>
                  <MenuItem onClick={popupState.close}>Ohio</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
      </div>
    </div>
  );
};

export default Home;
