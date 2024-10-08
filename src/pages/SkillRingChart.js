import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './SkillRingChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillRingChart = ({ title, labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Years of Experience',
        data: data,
        backgroundColor: [
        //   'rgba(75, 192, 192, 0.6)',
        '#aed6f1',
        //   'rgba(54, 162, 235, 0.6)',
        '#bb8fce',
        //   'rgba(255, 206, 86, 0.6)',
        'yellow',
          '#FF0066 ',
        ],
        borderColor: [
        //   'rgba(75, 192, 192, 1)',
        '#3498db',
        //   'rgba(54, 162, 235, 1)',
        '#9b59b6',
          'rgba(255, 206, 86, 1)',
        //   'rgba(255, 99, 132, 1)',
        '#FF66FF'
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
        labels: {
            color: 'white'
        },
        onClick: () =>{}
      },
    },
    layout: {
        padding: {
            left: 20,
            right:20
        }
    }
  };

  return (
    <div className='ringchart' style={{ width: '100%', height: '300px', marginBottom: '50px' }}>
      <h3 className='chart-title'>{title}</h3>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SkillRingChart;
