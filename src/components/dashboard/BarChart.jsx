import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const data = {
    labels: ["Custom", "Category1", "Category2", "Category3", "Category4"],
    datasets: [
      {
        data: [
          props.amount.category_6,
          props.amount.category_7,
          props.amount.category_8,
          props.amount.category_9,
          props.amount.category_10,
        ],
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

  const mobileView = window.innerWidth < 700;

  return (
    <div
      style={{
        width: mobileView ? "95%" : "600px",
        height: mobileView ? "200px" : "320px",
        position: "relative",
        alignSelf: "center"
      }}
    >
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
