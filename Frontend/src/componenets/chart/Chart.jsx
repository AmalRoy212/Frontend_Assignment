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
      barPercentage: 0.8, 
      categoryPercentage: 1.0, 
    },
    {
      label: 'Dataset 2',
      data: [9, 21, 30, 35],
      backgroundColor: '#EE8484',
      barPercentage: 0.8, 
      categoryPercentage: 1.0, 
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    filler: {
      propagate: false, 
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
