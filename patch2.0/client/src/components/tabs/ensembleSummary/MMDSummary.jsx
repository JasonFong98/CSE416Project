import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import api from "../../../api/api"

export default function MMDSummary(data) {
  const [mmdOne, setmmdOne] = useState(data.mmdData[0].type);
  const [mmdTwo, setmmdTwo] = useState(data.mmdData[1].type);
  const [planAlignment, setPlanAlignment] = useState(mmdOne);
  const [summary, setSummary] = useState({ 
    "plans": "10,000",
    "averagePopulation": data.mmdData[0].averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
    "averageWhitePopulation": data.mmdData[0].averageWhitePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "averageAfricanPopulation": data.mmdData[0].averageAfricanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "averageAsianPopulation": data.mmdData[0].averageAsianPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
    "averageLatinoPopulation": data.mmdData[0].averageLatinoPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
    "averageMajorityMinority": data.mmdData[0].averageMajorityMinority, 
    "averageDemocrat": data.mmdData[0].averageDemocrat,
    "averageRepublican": data.mmdData[0].averageRepublican,
    "averagePolsbyPopper": data.mmdData[0].averagePolsbyPopper.toString().substring(0,8),
  });

  

  const handlePlanChange = (event, newPlanAlignment) => {
    if (newPlanAlignment==mmdOne) {
      setSummary({
        "plans": "10,000",
        "averagePopulation": data.mmdData[0].averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageWhitePopulation": data.mmdData[0].averageWhitePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        "averageAfricanPopulation": data.mmdData[0].averageAfricanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        "averageAsianPopulation": data.mmdData[0].averageAsianPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageLatinoPopulation": data.mmdData[0].averageLatinoPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageMajorityMinority": data.mmdData[0].averageMajorityMinority, 
        "averageDemocrat": data.mmdData[0].averageDemocrat,
        "averageRepublican": data.mmdData[0].averageRepublican,
        "averagePolsbyPopper": data.mmdData[0].averagePolsbyPopper.toString().substring(0,8),
      })
    }
    else if(newPlanAlignment==mmdTwo) {
      setSummary({
        "plans": "10,000",
        "averagePopulation": data.mmdData[1].averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageWhitePopulation": data.mmdData[1].averageWhitePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        "averageAfricanPopulation": data.mmdData[1].averageAfricanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        "averageAsianPopulation": data.mmdData[1].averageAsianPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageLatinoPopulation": data.mmdData[1].averageLatinoPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 
        "averageMajorityMinority": data.mmdData[1].averageMajorityMinority, 
        "averageDemocrat": data.mmdData[1].averageDemocrat,
        "averageRepublican": data.mmdData[1].averageRepublican,
        "averagePolsbyPopper": data.mmdData[1].averagePolsbyPopper.toString().substring(0,8),
      })
    }
    else {
      setSummary({
        "plans": "0",
        "averagePopulation": 0,
        "averageWhitePopulation": 0,
        "averageAfricanPopulation": 0,
        "averageAsianPopulation": 0,
        "averageLatinoPopulation": 0,
        "averageMajorityMinority": 0,
        "averageDemocrat": 0,
        "averageRepublican": 0,
        "averagePolsbyPopper": 0,
      })
    }
    setPlanAlignment(newPlanAlignment);
  };

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
            <p>Number of District Plans</p>
            <hr/>
            <p>Average Population per District</p>
            <hr/>
            <p>Average White Population per District</p>
            <hr/>
            <p>Average Black/African Population per District</p>
            <hr/>
            <p>Average Asian Population per District</p>
            <hr/>
            <p>Average Latino Population per District</p>
            <hr/>
            <p>Average Majority-minority Representatives per Plan</p>
            <hr/>
            <p>Average Republican/Democratic Split</p>
            <hr/>
            <p>Average Polsby-popper Value</p>
          </div>

          <div id="summary-data">
            <p>{summary.plans}</p>
            <hr id="line"/>
            <p>{summary.averagePopulation}</p>
            <hr id="line"/>
            <p>{summary.averageWhitePopulation}</p>
            <hr id="line"/>
            <p>{summary.averageAfricanPopulation}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{summary.averageAsianPopulation}</p>
            <hr id="line"/>
            <p>{summary.averageLatinoPopulation}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{summary.averageMajorityMinority}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{summary.averageRepublican}/{summary.averageDemocrat}</p>
            <hr id="line"/>
            <p>{summary.averagePolsbyPopper}</p>
          </div>
        </Paper>
      </Box>
      <ToggleButtonGroup
        style={{position:"relative", left:"55%", paddingBottom:"2%"}}
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
    </div>
  );
}