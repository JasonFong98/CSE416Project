import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import api from "../../api/api";

const GeneralInfo = (state) => {
  const stateDict = { Ohio: "OH", Virginia: "VA", "North Carolina": "NC" };
  const [demographicPercentages, setDemographicPercentages] = useState({
    white: 0,
    africanAmerican: 0,
    asian: 0,
    latino: 0,
    other: 0,
  });

  const [demographicPopulation, setDemographicPopulation] = useState({
    white: 0,
    africanAmerican: 0,
    asian: 0,
    latino: 0,
    total: 0,
  });

  useEffect(() => {
    api.getStateDemographics(stateDict[state.state.state]).then((res) => {
      const stateDemographics = res.data;
      const demographicPercentages = stateDemographics[0];
      const demographicPopulation = stateDemographics[1];
      const totalPopulation = stateDemographics[2];
      setDemographicPercentages({
        white: demographicPercentages["CAUCASIAN"],
        africanAmerican: demographicPercentages["AFRICAN"],
        asian: demographicPercentages["ASIAN"],
        latino: demographicPercentages["LATINO"],
        other: demographicPercentages["OTHER"],
      });
      setDemographicPopulation({
        white: demographicPopulation["CAUCASIAN"],
        africanAmerican: demographicPopulation["AFRICAN"],
        asian: demographicPopulation["ASIAN"],
        latino: demographicPopulation["LATINO"],
        total: totalPopulation["TotalPopulation"],
      });
    });
  }, []);

  const whitePer = demographicPercentages.white.toFixed(2);
  const africanAmericanPer = demographicPercentages.africanAmerican.toFixed(2);
  const asianPer = demographicPercentages.asian.toFixed(2);
  const latinoPer = demographicPercentages.latino.toFixed(2);
  const otherPer = demographicPercentages.other.toFixed(2);
  const totalPer = 100;

  let total = demographicPopulation.total;
  const white = demographicPopulation.white
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const africanAmerican = demographicPopulation.africanAmerican
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const asian = demographicPopulation.asian
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const latino = demographicPopulation.latino
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const other = (
    total -
    demographicPopulation.white -
    demographicPopulation.asian -
    demographicPopulation.latino -
    demographicPopulation.africanAmerican
    )
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let districtNum = 0;
  let demPer = 0;
  let repPer = 0;
  switch (state.state.state) {
    case "Ohio":
      districtNum = 16;
      demPer = 45.2;
      repPer = 53.3;
      break;
    case "Virginia":
      districtNum = 11;
      demPer = 54.1;
      repPer = 44.0;
      break;
    case "North Carolina":
      districtNum = 13;
      demPer = 48.6;
      repPer = 49.9;
      break;
    default:
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 850,
            height: 320,
          },
        }}
      >
        <Paper id="demo-card" elevation={2}>
          <h3>Demographics</h3>
          <div id="demo-card-race">
            <span>
              <p>White</p>
            </span>
            <span>
              <p>Black/African American</p>
            </span>
            <span>
              <p>Asian</p>
            </span>
            <span>
              <p>Latino</p>
            </span>
            <span>
              <p>Other</p>
            </span>
            <hr />
            <span>
              <p>Total</p>
            </span>
          </div>

          <div id="demo-card-stats">
            <span>
              <p>{whitePer}%</p>
            </span>
            <span>
              <p>{africanAmericanPer}%</p>
            </span>
            <span>
              <p>{asianPer}%</p>
            </span>
            <span>
              <p>{latinoPer}%</p>
            </span>
            <span>
              <p>{otherPer}%</p>
            </span>
            <hr />
            <span>
              <p>{totalPer}%</p>
            </span>
          </div>

          <div id="demo-card-stats">
            <span>
              <p>{white}</p>
            </span>
            <span>
              <p>{africanAmerican}</p>
            </span>
            <span>
              <p>{asian}</p>
            </span>
            <span>
              <p>{latino}</p>
            </span>
            <span>
              <p>{other}</p>
            </span>
            <hr />
            <span>
              <p>{total}</p>
            </span>
          </div>
        </Paper>
      </Box>

      <div className="flex-container">
        <Paper id="num-of-dis" elevation={2}>
          <h3>Number of Districts</h3>
          <h1>{districtNum}</h1>
        </Paper>

        <Paper id="elect-info" elevation={2}>
          <h3>2020 Election</h3>
          <div id="per1">Republican Percentage:</div>
          <div id="per2">{repPer}%</div>
          <br />
          <div id="per1">Democratic Percentage:</div>
          <div id="per2">{demPer}%</div>
        </Paper>
      </div>
    </div>
  );
};

export default GeneralInfo;
