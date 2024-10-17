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
          'rgb(254, 172, 94)', 
          'rgb(199, 121, 208)', 
          'rgb(75, 192, 200)',
          'rgb(220, 36, 36)',
          'rgb(74, 86, 157)',
        ],
        borderColor: [
          'rgb(254, 172, 94)', 
          'rgb(199, 121, 208)', 
          'rgb(75, 192, 200)',
          'rgb(220, 36, 36)',
          'rgb(74, 86, 157)',
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
            left: 10,
            right:10
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
