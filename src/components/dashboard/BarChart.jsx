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
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#0C0C0C",
        },
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
    <div style={{ width: "600px", height: "320px", position: "relative" }}>
      <Bar data={data} options={options} />
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "36px",
          position: "absolute",
          top: "0",
        }}
      >
        ₹
      </p>
    </div>
  );
};

export default BarChart;
