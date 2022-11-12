import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import api from "../../api/api"

const BoxAndWhiskers = (state) => {
  const stateDict =  {"Ohio": "OH", "Florida": "FL", "North Carolina": "NC"}
  const [alignment, setAlignment] = useState("SMD");
  const [data, setData] = useState({ "Asian": [0,1,2,3,4]});
  useEffect(() => {
    api.getBoxWhisker(stateDict[state.state.state]).then((res) => {
      //console.log(res.data.ensemble.boxAndWhiskers[0])
      const boxWhiskerData=res.data.ensemble.boxAndWhiskers[0]
      console.log(boxWhiskerData)
      setData({
        "Asian": [boxWhiskerData.min, boxWhiskerData.firstQ, boxWhiskerData.median, boxWhiskerData.thirdQ, boxWhiskerData.max]
      });
    });
  }, []);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  let options = {
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Asian",
            y: data["Asian"],
          },
          {
            x: "Jan 2016",
            y: data["Asian"],
          },
          {
            x: "Jan 2017",
            y: data["Asian"],
          },
          {
            x: "Jan 2018",
            y: data["Asian"],
          },
          {
            x: "Jan 2019",
            y: data["Asian"],
          },
          {
            x: "Jan 2020",
            y: data["Asian"],
          },
          {
            x: "Jan 2021",
            y: data["Asian"],
          },
        ],
      },
    ],
    chart: {
      type: "boxPlot",
      height: 500,
      
    },
    title: {
      text: "Basic BoxPlot Chart",
      align: "left",
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: "#5C4742",
          lower: "#A5978B",
        },
      },
    },
  };

  return (
    <div>
      <ToggleButtonGroup
        style={{position:"relative", left:"67%", paddingBottom:"2%"}}
        color="warning"
        value={alignment}
        exclusive
        onChange={handleChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value="SMD"><b>SMD</b></ToggleButton>
        <ToggleButton value="MMD"><b>MMD</b></ToggleButton>
        <ToggleButton value="BOTH"><b>SMD & MMD</b></ToggleButton>
      </ToggleButtonGroup>
      <Chart
        options={options.chart}
        series={options.series}
        type="boxPlot"
        width="700"
      />
    </div>
  );
}

export default BoxAndWhiskers;
