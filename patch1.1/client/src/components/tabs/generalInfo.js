import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function GeneralInfo() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 850,
            height: 275,
          },
        }}
      >
        <Paper id="demo-card" elevation={2}>
          <h3>Demographics</h3>
          <div id="demo-card-race">
            <p>White</p>
            <p>Black/African American</p>
            <p>Asian</p>
            <p>Latino</p>
            <hr />
            <p>Total</p>
          </div>
          <div id="demo-card-stats">
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <hr />
            <p>0</p>
          </div>

          <div id="demo-card-stats">
            <p>0%</p>
            <p>0%</p>
            <p>0%</p>
            <p>0%</p>
            <hr />
            <p>100%</p>
          </div>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 850,
            height: 275,
          },
        }}
      >
        <Paper elevation={2}>

        </Paper>
      </Box>
    </div>
  );
}

export default GeneralInfo;
