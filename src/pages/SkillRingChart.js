import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillRingChart = ({ title, labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Years of Experience',
        data: data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%', // Creates the doughnut hole
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '300px', marginBottom: '50px' }}>
      <h3>{title}</h3>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SkillRingChart;
