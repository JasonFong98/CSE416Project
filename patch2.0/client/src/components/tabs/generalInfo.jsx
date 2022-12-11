import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import api from "../../api/api"

const GeneralInfo = (state) => {
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const [demographics, setDemographics] = useState({ 
    "white": 0, "africanAmerican": 0, "asian": 0, "latino": 0, "total": 0 });

  useEffect(() => {
    api.getStateDemographics(stateDict[state.state.state]).then((res) => {
      const demograpgicsData=res.data.stateDemographics
      setDemographics({
        "white": demograpgicsData[0].population,
        "africanAmerican": demograpgicsData[1].population, 
        "asian": demograpgicsData[2].population,
        "latino": demograpgicsData[3].population,
      })
    });
  }, []);
    const white = demographics.white.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const africanAmerican = demographics.africanAmerican.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const asian = demographics.asian.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const latino = demographics.latino.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const totalNum = demographics.white+demographics.africanAmerican+demographics.asian+demographics.latino
    const total = totalNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const whitePer = (100 * demographics.white/totalNum).toFixed(2);
    const africanAmericanPer = (100 * demographics.africanAmerican/totalNum).toFixed(2);
    const asianPer = (100 * demographics.asian/totalNum).toFixed(2);
    const latinoPer = (100 * demographics.latino/totalNum).toFixed(2);
    const totalPer = 100;

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
            <span><p>{whitePer}%</p></span>
            <span><p>{africanAmericanPer}%</p></span>
            <span><p>{asianPer}%</p></span>
            <span><p>{latinoPer}%</p></span>
            <hr />
            <span><p>{totalPer}%</p></span>
          </div>
          
          <div id="demo-card-stats">
            <span><p>{white}</p></span>
            <span><p>{africanAmerican}</p></span>
            <span><p>{asian}</p></span>
            <span><p>{latino}</p></span>
            <hr />
            <span><p>{total}</p></span>
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
