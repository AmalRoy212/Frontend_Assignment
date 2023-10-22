import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [19, 12, 20, 23],
      backgroundColor: '#98D89E',
      barPercentage: 0.8, // Adjust this value for border radius effect
      categoryPercentage: 1.0, // Adjust this value for border radius effect
    },
    {
      label: 'Dataset 2',
      data: [9, 21, 30, 35],
      backgroundColor: '#EE8484',
      barPercentage: 0.8, // Adjust this value for border radius effect
      categoryPercentage: 1.0, // Adjust this value for border radius effect
    },
  ],
};

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const options = {
//   maintainAspectRatio: false,
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };
const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true, // Hide grid lines on the y-axis
      },
    },
    x: {
      grid: {
        display: false, // Hide grid lines on the x-axis
      },
    },
  },
  plugins: {
    filler: {
      propagate: false, // Disable filling of the area under the line
    },
    legend: {
      display: false,
    },
  },
};


function Chart({ chartData }) {
  return <Bar options={options} data={chartData} />
}

export default Chart
