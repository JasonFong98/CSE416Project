import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const BoxAndWhiskers = (data) => {
  const patternOne = data.mmdData[0][0].pattern.replace('MMD-', '');
  const patternTwo = data.mmdData[1][0].pattern.replace('MMD-', '');
  const patternArray = [patternOne, patternTwo];
  //[first mmd African] [first mmd Asian] [first mmd Latino] [second mmd African] [second mmd Asian] [second mmd Latino]
  let mmdBoxAndWhiskerArray = [[[],[],[]],[[],[],[]]];
  for(let i=0; i<data.mmdData.length; i++) {
    let districtNumCounter = 1;
    for(let j=0; j<data.mmdData[i].length; j++) {
      if (districtNumCounter>patternArray[i].length) {
        districtNumCounter=1;
      }
      let x = districtNumCounter;
      let y = [data.mmdData[i][j].min, data.mmdData[i][j].firstQ, data.mmdData[i][j].median, data.mmdData[i][j].thirdQ, data.mmdData[i][j].max];
      let xy = { x: x, y: y};
      if(data.mmdData[i][j].type=="AFRICAN") {
        mmdBoxAndWhiskerArray[i][0].push(xy)
      }
      else if(data.mmdData[i][j].type=="ASIAN") {
        mmdBoxAndWhiskerArray[i][1].push(xy)
      }
      else if(data.mmdData[i][j].type=="LATINO") {
        mmdBoxAndWhiskerArray[i][2].push(xy)
      }
      districtNumCounter++;
    }
  }
  const [planAlignment, setPlanAlignment] = useState("SMD");
  const [raceAlignment, setRaceAlignment] = useState("AFRICAN");
  const [barData, setBarData] = useState(data.data[0]);
  const [enactedData, setEnactedData] = useState(data.enactedData[0]);
  const [mmdOne, setmmdOne] = useState(data.mmdData[0][0].pattern);
  const [mmdTwo, setmmdTwo] = useState(data.mmdData[1][0].pattern);
  const handlePlanChange = (event, newPlanAlignment) => {
    if (raceAlignment=="AFRICAN") {
      if (newPlanAlignment=="SMD") {
        setBarData(data.data[0]);
        setEnactedData(data.enactedData[0]);
      }
      else if (newPlanAlignment==mmdOne) {
        setBarData(mmdBoxAndWhiskerArray[0][0]);
        setEnactedData([]);
      }
      else if (newPlanAlignment==mmdTwo) {
        setBarData(mmdBoxAndWhiskerArray[1][0]);
        setEnactedData([]);
      }
      else {
        setBarData([]);
        setEnactedData([]);
      }
    }
    else if (raceAlignment=="ASIAN") {
      if (newPlanAlignment=="SMD") {
        setBarData(data.data[1]);
        setEnactedData(data.enactedData[1]);
      }
      else if (newPlanAlignment==mmdOne) {
        setBarData(mmdBoxAndWhiskerArray[0][1]);
        setEnactedData([]);
      }
      else if (newPlanAlignment==mmdTwo) {
        setBarData(mmdBoxAndWhiskerArray[1][1]);
        setEnactedData([]);
      }
      else {
        setBarData([]);
        setEnactedData([]);
      }
    }
    else if (raceAlignment=="LATINO") {
      if (newPlanAlignment=="SMD") {
        setBarData(data.data[2]);
        setEnactedData(data.enactedData[2]);
      }
      else if (newPlanAlignment==mmdOne) {
        setBarData(mmdBoxAndWhiskerArray[0][2]);
        setEnactedData([]);
      }
      else if (newPlanAlignment==mmdTwo) {
        setBarData(mmdBoxAndWhiskerArray[1][2]);
        setEnactedData([]);
      }
      else {
        setBarData([]);
        setEnactedData([]);
      }
    }
    else {
      setBarData([]);
      setEnactedData([]);
    }
    setPlanAlignment(newPlanAlignment);
  };
  const handleRaceChange = (event, newRaceAlignment) => {
    if (planAlignment=="SMD") {
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
        setBarData([]);
        setEnactedData([]);
      }
    }
    else if(planAlignment==mmdOne) {
      if (newRaceAlignment=="AFRICAN") {
        setBarData(mmdBoxAndWhiskerArray[0][0]);
        setEnactedData([]);
      }
      else if (newRaceAlignment=="ASIAN") {
        setBarData(mmdBoxAndWhiskerArray[0][1]);
        setEnactedData([]);
      }
      else if (newRaceAlignment=="LATINO") {
        setBarData(mmdBoxAndWhiskerArray[0][2]);
        setEnactedData([]);
      }
      else {
        setBarData([]);
        setEnactedData([]);
      }
    }
    else if(planAlignment==mmdTwo) {
      if (newRaceAlignment=="AFRICAN") {
        setBarData(mmdBoxAndWhiskerArray[1][0]);
        setEnactedData([]);
      }
      else if (newRaceAlignment=="ASIAN") {
        setBarData(mmdBoxAndWhiskerArray[1][1]);
        setEnactedData([]);
      }
      else if (newRaceAlignment=="LATINO") {
        setBarData(mmdBoxAndWhiskerArray[1][2]);
        setEnactedData([]);
      }
      else {
        setBarData([]);
        setEnactedData([]);
      }
    }
    else {
      setBarData([]);
      setEnactedData([]);
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
        <ToggleButton value={mmdOne}><b>{mmdOne}</b></ToggleButton>
        <ToggleButton value={mmdTwo}><b>{mmdTwo}</b></ToggleButton>
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
