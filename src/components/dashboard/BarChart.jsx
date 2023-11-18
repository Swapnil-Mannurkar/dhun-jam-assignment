import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["Custom", "Category1", "Category2", "Category3", "Category4"],
    datasets: [
      {
        data: [90, 80, 70, 60, 50],
        backgroundColor: "#F0C3F1",
        barThickness: 30,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 2,
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
