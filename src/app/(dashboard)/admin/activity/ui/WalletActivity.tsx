"use client";

import React from 'react'

export const WalletActivity = () => {
  return (
    <div className="p-4 bg-gray-800 rounded text-white">
      <h4 className="text-lg font-bold">Wallet Activity</h4>
      <ul className="mt-4">
        <li className="flex justify-between py-2">
          <span>From BTC Wallet Binance</span>
          <span className="text-green-500">+30.000</span>
          <span className="text-gray-400">08/05/2024</span>
        </li>
        <li className="flex justify-between py-2">
          <span>To Ether Blockchain</span>
          <span className="text-red-500">-5.23</span>
          <span className="text-gray-400">07/26/2024</span>
        </li>
        <li className="flex justify-between py-2">
          <span>From LiteCoin Wallet</span>
          <span className="text-green-500">+1.000</span>
          <span className="text-gray-400">07/03/2024</span>
        </li>
        <li className="flex justify-between py-2">
          <span>From BTC Wallet</span>
          <span className="text-green-500">+900</span>
          <span className="text-gray-400">06/10/2024</span>
        </li>
      </ul>
    </div>
  );
};
