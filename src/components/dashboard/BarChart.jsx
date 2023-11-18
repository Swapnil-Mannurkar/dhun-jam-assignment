import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "./BarChartData";

const BarChart = () => {
  const userData = {
    labels: UserData.map((data) => data.xAxis),
    datasets: [
      {
        label: "Guest",
        data: UserData.map((data) => data.yAxis2),
        tension: 0.5,
        borderColor: "#E9A0A0",
        pointBackgroundColor: "#E9A0A0",
      },
      {
        label: "User",
        data: UserData.map((data) => data.yAxis1),
        tension: 0.5,
        borderColor: "#9BDD7C",
        pointBackgroundColor: "#9BDD7C",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Bar data={userData} options={options} />
    </div>
  );
};

export default BarChart;
