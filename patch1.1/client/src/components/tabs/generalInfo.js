import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function GeneralInfo() {

    const white = 0;
    const africanAmerican = 0;
    const asian = 0;
    const latino = 0;
    const total = 0;

    const whitePer = 0;
    const africanAmericanPer = 0;
    const asianPer = 0;
    const latinoPer = 0;
    const totalPer = 0;

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
            <p>{white}</p>
            <p>{africanAmerican}</p>
            <p>{asian}</p>
            <p>{latino}</p>
            <hr />
            <p>{total}</p>
          </div>

          <div id="demo-card-stats">
            <p>{whitePer}%</p>
            <p>{africanAmericanPer}%</p>
            <p>{asianPer}%</p>
            <p>{latinoPer}%</p>
            <hr />
            <p>{totalPer}%</p>
          </div>
        </Paper>
      </Box>

      <Box
        id ="gen-small-box"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 417,
            height: 275,
          },
        }}
      >
        <Paper elevation={2}>

        </Paper>
      </Box>

      <Box
        id="gen-small-box"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 417,
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
