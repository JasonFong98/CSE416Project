import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
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
        <Paper elevation={2}>
          <div id="smd-summary-names">
            <p id="smd-summary-name">Number of district plans</p><div id="smd-summary-data">20</div>
            <hr id="line"/>
            <p>Average number of <br/>majority-minority representatives<span id="smd-summary-data">20</span></p>
            <hr id="line"/>
            <p>Average equal population measure<span id="smd-summary-data">20</span></p>
            <hr id="line"/>
            <p>Average Polsby-popper value<span id="smd-summary-data">20</span></p>
            <hr id="line"/>
            <p>Average Republican/Democratic split<span id="smd-summary-data">20</span></p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
