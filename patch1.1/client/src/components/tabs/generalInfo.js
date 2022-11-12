import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import api from "../../api/api"

const GeneralInfo = (state) => {
  const stateDict =  {"Ohio": "OH", "Florida": "FL", "North Carolina": "NC"}
  const [demographics, setDemographics] = useState({ 
    "white": 0, "africanAmerican": 0, "asian": 0, "latino": 0, "total": 0 });

  useEffect(() => {
    api.getStateMap(stateDict[state.state.state]).then((res) => {
      const demographicData=res.data.stateDemographic
      console.log(demographicData)
      setDemographics({
        "white": demographicData.caucasian, 
        "africanAmerican": demographicData.africanAmerican, 
        "asian": demographicData.asian,
        "latino": demographicData.latino,
        "total": demographicData.totalPopulation
      })
    });
  }, []);
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
            <span><p>{demographics.white}</p></span>
            <span><p>{demographics.africanAmerican}</p></span>
            <span><p>{demographics.asian}</p></span>
            <span><p>{demographics.latino}</p></span>
            <hr />
            <span><p>{demographics.total}</p></span>
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
