import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const BoxAndWhiskers = (data) => {
  const [alignment, setAlignment] = useState("SMD");
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  let options = {
    series: [
      {
        name: 'box',
        type: "boxPlot",
        data: [
          {
            x: "District 1",
            y: [1,2,3,4,5],
          },
        ],
      },
      {
        name: 'outliers',
        type: "scatter",
        data: [
          {
            x: "District 1",
            y: 7
          }
        ]
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 500,
      },
      title: {
        text: "chart",
        align: "left",
      },
      colors: ['#008FFB', '#FEB019'],
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
      <ToggleButtonGroup
        style={{position:"relative", right:"31%", paddingBottom:"2%"}}
        color="warning"
        value={alignment}
        exclusive
        onChange={handleChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value="SMD"><b>African</b></ToggleButton>
        <ToggleButton value="MMD"><b>Asian</b></ToggleButton>
        <ToggleButton value="BOTH"><b>Latino</b></ToggleButton>
      </ToggleButtonGroup>
      <Chart
        options={options.options}
        series={options.series}
        type="boxPlot"
        width="700"
        height="700"
      />
    </div>
  );
}

export default BoxAndWhiskers;
