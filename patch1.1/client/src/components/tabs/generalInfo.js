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
            <span><p>White</p></span>
            <span><p>Black/African American</p></span>
            <span><p>Asian</p></span>
            <span><p>Latino</p></span>
            <hr />
            <span><p>Total</p></span>
          </div>
          <div id="demo-card-stats">
            <span><p>{white}</p></span>
            <span><p>{africanAmerican}</p></span>
            <span><p>{asian}</p></span>
            <span><p>{latino}</p></span>
            <hr />
            <span><p>{total}</p></span>
          </div>

          <div id="demo-card-stats">
            <span><p>{whitePer}%</p></span>
            <span><p>{africanAmericanPer}%</p></span>
            <span><p>{asianPer}%</p></span>
            <span><p>{latinoPer}%</p></span>
            <hr />
            <span><p>{totalPer}%</p></span>
          </div>
        </Paper>
      </Box>


      <div className="flex-container">
        <Paper id="num-of-dis"elevation={2}>
           <h3>Number of Districts</h3>
           <h1>16</h1>
        </Paper>

        <Paper id="elect-info" elevation={2}>   
            <h3>2020 Election</h3>
            <div id="per1">Republican Percentage:</div>
            <div id="per2">53.3%</div>
            <br/>
            <div id="per1">Democratic Percentage:</div>
            <div id="per2">45.2%</div>
        </Paper>

      </div>
    </div>
  );
}

export default GeneralInfo;
