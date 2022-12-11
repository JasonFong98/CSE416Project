import React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarGraph = (data) => {
  console.log(data.data)
  const keys = Object.keys(data.data);
  const values = Object.values(data.data);
  let options = {
    options: {
      chart: {
        height: 500,
        id: "bar",
      },
      xaxis: {
        categories: keys,
      },
      yaxis: {
        title: { text: "Number of District Plans" },
      },
      title: {
        text: "Republican/Democrat Split",
        floating: true,
        offsetY: 0,
        align: "center",
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
        height="600"
      />
    </div>
  );
};

export default BarGraph;
