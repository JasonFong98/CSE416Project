import React, {useState} from "react";
import Chart from "react-apexcharts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function BoxAndWhiskers() {
  const [alignment, setAlignment] = React.useState("SMD");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  let options = {
    series: [
      {
        type: "boxPlot",
        data: [
          {
            x: "Jan 2015",
            y: [54, 66, 69, 75, 88],
          },
          {
            x: "Jan 2016",
            y: [43, 65, 69, 76, 81],
          },
          {
            x: "Jan 2017",
            y: [31, 39, 45, 51, 59],
          },
          {
            x: "Jan 2018",
            y: [39, 46, 55, 65, 71],
          },
          {
            x: "Jan 2019",
            y: [29, 31, 35, 39, 44],
          },
          {
            x: "Jan 2020",
            y: [41, 49, 58, 61, 67],
          },
          {
            x: "Jan 2021",
            y: [54, 59, 66, 71, 88],
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
