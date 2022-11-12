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
            <p>White</p>
            <p>Black/African American</p>
            <p>Asian</p>
            <p>Latino</p>
            <hr />
            <p>Total</p>
          </div>
          <div id="demo-card-stats">
            <p>{demographics.white}</p>
            <p>{demographics.africanAmerican}</p>
            <p>{demographics.asian}</p>
            <p>{demographics.latino}</p>
            <hr />
            <p>{demographics.total}</p>
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

      <div className="flex-container">
        <Paper id="num-of-dis"elevation={2}>
           <h3>Number of Districts</h3>
           <h1>16</h1>
        </Paper>

        <Paper id="elect-info" elevation={2}>   
            <h3>2020 Election</h3>
            <div id="per1"><h7>Republican Percentage:</h7></div>
            <div id="per2">53.3%</div>
            <br/>
            <div id="per1"><h7>Democratic Percentage:</h7></div>
            <div id="per2">45.2%</div>
        </Paper>

      </div>
    </div>
  );
}

export default GeneralInfo;
