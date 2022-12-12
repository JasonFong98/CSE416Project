import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import api from "../../../api/api"

export default function BasicTable(state) {
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const numOfPlans = 10000;
  let averagePopulation = 0;
  let averageWhitePopulation = 0;
  let averageAfricanPopulation = 0;
  let averageAsianPopulation = 0;
  let averageLatinoPopulation = 0;
  let averageMajorityMinority = 0;
  let averageDemocrat = 0;
  let averageRepublican = 0;
  let averagePolsbyPopper = 0;
  useEffect(() => {
    api.getSMDSummary(stateDict[state.state.state]).then((res) => {
      const data = res.data;
      console.log(data)
      averagePopulation = data.averagePopulation;
      averageWhitePopulation = data.averageWhitePopulation;
      averageAfricanPopulation = data.averageAfricanPopulation;
      averageAsianPopulation = data.averageAsianPopulation;
      averageLatinoPopulation = data.averageLatinoPopulation;
      averageMajorityMinority = data.averageMajorityMinority;
      averageDemocrat = data.averageDemocrat;
      averageRepublican = data.averageRepublican;
      averagePolsbyPopper = data.averagePolsbyPopper;
    });
  }, []);

  

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
            <p>555</p>
            <hr id="line"/>
            <br/>
            <p>555</p>
            <hr id="line"/>
            <p>555</p>
            <hr id="line"/>
            <p>555</p>
            <hr id="line"/>
            <p>555</p>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
