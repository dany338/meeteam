"use client";

import React from 'react'
import { Line } from 'react-chartjs-2';
import { RiBtcLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiLitecoin } from 'react-icons/si';

export const Balance = () => {
  const btcData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        borderColor: 'rgb(156, 163, 175)',
        backgroundColor: 'rgba(163, 162, 158, 0.2)',
        fill: true,
      },
    ],
  };

  const ethData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const ltcData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        data: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
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
  };

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold text-white mb-4">Total balance $183.936</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-start p-4 bg-yellow-400 rounded-lg">
          <div className="flex items-center mb-2">
            <RiBtcLine size={30} />
            <h4 className="text-lg font-bold text-white">1.9678 BTC</h4>
          </div>
          <div className="w-full h-16 mb-2">
            <Line data={btcData} options={options} />
          </div>
          <p className="text-sm text-gray-400">+12.5%</p>
        </div>
        <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <SiBlockchaindotcom size={30} />
            <h4 className="text-lg font-bold text-red-500">23.234 ETH</h4>
          </div>
          <div className="w-full h-16 mb-2">
            <Line data={ethData} options={options} />
          </div>
          <p className="text-sm text-gray-400">-5.23%</p>
        </div>
        <div className="flex flex-col items-start p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <SiLitecoin size={30} />
            <h4 className="text-lg font-bold text-green-500">380.234 LTC</h4>
          </div>
          <div className="w-full h-16 mb-2">
            <Line data={ltcData} options={options} />
          </div>
          <p className="text-sm text-gray-400">+39.69%</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
          <button className="py-2 px-4 text-gray-400 hover:text-white">
            + Add Currency
          </button>
        </div>
      </div>
    </div>
  );
}
