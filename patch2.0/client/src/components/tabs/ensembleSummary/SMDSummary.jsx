import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import api from "../../../api/api"

export default function BasicTable(state) {
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const [summary, setSummary] = useState({ 
    "averagePopulation": 0, 
    "averageWhitePopulation": 0,
    "averageAfricanPopulation": 0,
    "averageAsianPopulation": 0, 
    "averageLatinoPopulation": 0, 
    "averageMajorityMinority": 0, 
    "averageDemocrat": 0,
    "averageRepublican": 0,
    "averagePolsbyPopper": 0.0,
  });
  
  useEffect(() => {
    api.getSMDSummary(stateDict[state.state.state]).then((res) => {
      const data = res.data;
      setSummary({
        "averagePopulation": data.averagePopulation, 
        "averageWhitePopulation": data.averageWhitePopulation,
        "averageAfricanPopulation": data.averageAfricanPopulation,
        "averageAsianPopulation": data.averageAsianPopulation, 
        "averageLatinoPopulation": data.averageLatinoPopulation, 
        "averageMajorityMinority": data.averageMajorityMinority, 
        "averageDemocrat": data.averageDemocrat,
        "averageRepublican": data.averageRepublican,
        "averagePolsbyPopper": data.averagePolsbyPopper,
      })
    });
  }, []);
  const num = 10000;
  const numOfPlans = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  const averagePopulation = summary.averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const averageWhitePopulation = summary.averageWhitePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const averageAfricanPopulation = summary.averageAfricanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const averageAsianPopulation = summary.averageAsianPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const averageLatinoPopulation = summary.averageLatinoPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const averageMajorityMinority = summary.averageMajorityMinority;
  const averageDemocrat = summary.averageDemocrat;
  const averageRepublican = summary.averageRepublican;
  const averagePolsbyPopper = summary.averagePolsbyPopper.toString().substring(0,8);

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
            <p>{numOfPlans}</p>
            <hr id="line"/>
            <p>{averagePopulation}</p>
            <hr id="line"/>
            <p>{averageWhitePopulation}</p>
            <hr id="line"/>
            <p>{averageAfricanPopulation}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{averageAsianPopulation}</p>
            <hr id="line"/>
            <p>{averageLatinoPopulation}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{averageMajorityMinority}</p>
            <hr id="line"/>
            <hr id="line"/>
            <p>{averageRepublican}/{averageDemocrat}</p>
            <hr id="line"/>
            <p>{averagePolsbyPopper}</p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
