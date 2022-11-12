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
        type: "boxPlot",
        data: [
          {
            x: "District 1",
            y: data.data["one"],
          },
          {
            x: "District 2",
            y: [0,0,0,0,0],
          },
          {
            x: "District 3",
            y: [0,0,0,0,0],
          },
          {
            x: "District 4",
            y: [0,0,0,0,0],
          },
          {
            x: "JDistrict 5",
            y: [0,0,0,0,0],
          },
          {
            x: "District 6",
            y: [0,0,0,0,0],
          },
          {
            x: "District 7",
            y: [0,0,0,0,0],
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
    options: {
      chart: {
        type: 'boxPlot',
        height: 350
      },
      title: {
        text: 'Basic BoxPlot Chart',
        align: 'left'
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper:'#008FFB', 
            lower:'#FEB019'
          }
        }
      }
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
