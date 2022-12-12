import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const BoxAndWhiskers = (data) => {
  const [planAlignment, setPlanAlignment] = useState("SMD");
  const [raceAlignment, setRaceAlignment] = useState("AFRICAN");
  const [barData, setBarData] = useState(data.data[0]);
  const [enactedData, setEnactedData] = useState(data.enactedData[0]);
  const handlePlanChange = (event, newPlanAlignment) => {
    setPlanAlignment(newPlanAlignment);
  };
  const handleRaceChange = (event, newRaceAlignment) => {
    if (newRaceAlignment=="AFRICAN") {
      setBarData(data.data[0]);
      setEnactedData(data.enactedData[0]);
    }
    else if (newRaceAlignment=="ASIAN") {
      setBarData(data.data[1]);
      setEnactedData(data.enactedData[1]);
    }
    else if (newRaceAlignment=="LATINO") {
      setBarData(data.data[2]);
      setEnactedData(data.enactedData[2]);
    }
    else {
      setBarData([])
    }
    setRaceAlignment(newRaceAlignment);
  };


  let options = {
    series: [
      {
        name: 'ReCom Ensemble',
        type: "boxPlot",
        data: barData,
      },
      {
        name: 'Enacted Plan',
        type: "scatter",
        data: enactedData,
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 500,
        animations: {
          enabled: false,
        },
        dyamicAnimation: {
          enabled: false,
        }
      },
      title: {
        text: "Box and Whiskers",
        align: "left",
        offsetX: 250,
        style: {
          fontSize: 22,
          color: '#189AB4',
        }
      },
      colors: ['#008FFB', '#FEB019'],
      yaxis: {
        labels: {
          formatter: function (value) {
            return value;
          }
        },
        title: { text: "Percentage",
                 style: {
                  fontSize: 20,
                  color: '#189AB4',
                  fontFamily: "sans-serif",
                } 
        },
      },
      xaxis: {
        title: { text: "Districts",
                 offsetY: 90,
                 offsetX: 0,
                 style: {
                  fontSize: 20,
                  color: "#189AB4",
                 }
        },
      },
    },

  };

  return (
    <div>
      <ToggleButtonGroup
        style={{position:"relative", left:"67%", paddingBottom:"2%"}}
        color="warning"
        value={planAlignment}
        exclusive
        onChange={handlePlanChange}
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
        value={raceAlignment}
        exclusive
        onChange={handleRaceChange}
        size="medium"
        aria-label="Platform"
      >
        <ToggleButton value="AFRICAN"><b>African</b></ToggleButton>
        <ToggleButton value="ASIAN"><b>Asian</b></ToggleButton>
        <ToggleButton value="LATINO"><b>Latino</b></ToggleButton>
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
