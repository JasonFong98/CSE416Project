import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function MMDSummary() {
  const numOfPlans = 0;
  const avgMajMinRep = 0;
  const avgPopMes = 0;
  const avgPolPopVal = 0;
  const avgSplit = 0;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 335,
          },
        }}
      >
          <Paper id="summary-block" elevation={2}>
          <div id="summary-names">
            <p>Number of district plans</p>
            <hr id="line"/>
            <p>Average number of <br/>majority-minority representatives</p>
            <hr id="line"/>
            <p>Average equal population measure</p>
            <hr id="line"/>
            <p>Average Polsby-popper value</p>
            <hr id="line"/>
            <p>Average Republican/Democratic split</p>
          </div>

          <div id="summary-data">
            <p>{numOfPlans}</p>
            <hr id="line"/>
            <br/>
            <p>{avgMajMinRep}</p>
            <hr id="line"/>
            <p>{avgPopMes}</p>
            <hr id="line"/>
            <p>{avgPolPopVal}</p>
            <hr id="line"/>
            <p>{avgSplit}</p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
