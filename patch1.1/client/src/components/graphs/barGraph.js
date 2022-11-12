import React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


import api from "../../api/api"

const BarGraph = (data) => {
  const keys = Object.keys(data.data);
  const values = Object.values(data.data);
  let options = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: keys,
      },
    },
    series: [
      {
        name: "series-1",
        data: values,
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
