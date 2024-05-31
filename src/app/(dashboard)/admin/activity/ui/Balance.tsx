"use client";

import React from 'react'

export const Balance = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold text-white">Total balance $183.936</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="p-4 bg-gray-800 rounded">
          <h4 className="text-lg font-bold text-yellow-400">1.9678 BTC</h4>
          <p className="text-sm text-white">+12.5%</p>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <h4 className="text-lg font-bold text-red-500">23.234 ETH</h4>
          <p className="text-sm text-white">-5.23%</p>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <h4 className="text-lg font-bold text-green-500">380.234 LTC</h4>
          <p className="text-sm text-white">+39.69%</p>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <button className="w-full py-2 px-4 rounded bg-gray-700 hover:bg-gray-600">
            + Add Currency
          </button>
        </div>
      </div>
    </div>
  );
}
