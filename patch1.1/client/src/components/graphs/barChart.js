import React from "react";
import Chart from "react-apexcharts";

function barChart() {
  let options = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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

export default barChart;
