"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'BTC',
      data: [30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
    },
    {
      label: 'ETH',
      data: [2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    },
    {
      label: 'LTC',
      data: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
};

export const Graph: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded">
      <Line data={data} options={options} />
    </div>
  );
};
