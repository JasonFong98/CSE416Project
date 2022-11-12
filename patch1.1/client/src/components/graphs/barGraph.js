import React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


import api from "../../api/api"

const BarGraph = (state) => {
  const stateDict =  {"Ohio": "OH", "Florida": "FL", "North Carolina": "NC"}
  useEffect(() => {
    api.getBarGraph(stateDict[state.state.state]).then((res) => {
      console.log(res.data)
    });
  }, []);
  let options = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["1:2", "2:3", "1:3", "2:5", "5:2", "3:1", "3:2", "3:1"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={options.options}
        series={options.series}
        type="bar"
        width="700"
        height="500"
      />
    </div>
  );
}

export default BarGraph;
