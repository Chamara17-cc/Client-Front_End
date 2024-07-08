import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressChart = ({ value = 0 }) => {
  const data = {
    labels: ["Progress"],
    datasets: [
      {
        label: "Progress",
        data: [value],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return context.parsed.x + "%";
          },
        },
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
    responsive: true,
    maintainAspectRatio: false,
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
    },
  };

  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        maxWidth: "300px",
        marginTop: "-10px",
        position: "relative",
      }}
    >
      <Bar data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {value.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressChart;
