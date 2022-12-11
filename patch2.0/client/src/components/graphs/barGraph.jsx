import React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarGraph = (data) => {
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
        title: { text: "Republican/Democrat",
                 offsetY: 90,
                 offsetX: 0,
                 style: {
                  fontSize: 16,
                  color: "#189AB4",
                 }
        },
      },
      yaxis: {
        title: { text: "Number of District Plans",
                 style: {
                  fontSize: 16,
                  color: '#189AB4',
                } 
        },
      },
      title: {
        text: "Republican/Democrat Split",
        floating: true,
        offsetY: 0,
        offsetX: 20,
        align: "center",
        style: {
          fontSize: 22,
          color: '#189AB4',
        } 
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
        height="750"
      />
    </div>
  );
};

export default BarGraph;
