import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressChart = ({ value = 75 }) => { // Default value to 75 for demonstration
  const data = {
    labels: [''],
    datasets: [
      {
        label: '',
        data: [value],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
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
        enabled: false,
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div style={{ height: '50px',width: '1000px',marginLeft:'60px'}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
