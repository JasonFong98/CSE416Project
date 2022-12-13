import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import api from "../../../api/api"

export default function MMDSummary(data) {
  console.log(data)
  const [mmdOne, setmmdOne] = useState(data.mmdData[0][0].pattern);
  const [mmdTwo, setmmdTwo] = useState(data.mmdData[1][0].pattern);
  const [planAlignment, setPlanAlignment] = useState(mmdOne);
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const numOfPlans = 0;
  const avgMajMinRep = 0;
  const avgPopMes = 0;
  const avgPolPopVal = 0;
  const avgSplit = 0;

  useEffect(() => {
    api.getMMDSummary(stateDict[state.state.state]).then((res) => {
      console.log(res.data);
    });
  }, []);

  const handlePlanChange = (event, newPlanAlignment) => {
    setPlanAlignment(newPlanAlignment);
  };

  return (
    <div>
      <ToggleButtonGroup
        style={{position:"relative", left:"67%", paddingBottom:"2%"}}
        color="warning"
        value={planAlignment}
        exclusive
        onChange={handlePlanChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value={mmdOne}><b>{mmdOne}</b></ToggleButton>
        <ToggleButton value={mmdTwo}><b>{mmdTwo}</b></ToggleButton>
      </ToggleButtonGroup>
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
            <hr/>
            <p>Average number of <br/>majority-minority representatives</p>
            <hr/>
            <p>Average equal population measure</p>
            <hr/>
            <p>Average Polsby-popper value</p>
            <hr/>
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