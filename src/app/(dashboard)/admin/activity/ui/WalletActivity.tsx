"use client";

import React from 'react'
import { RiBtcLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiLitecoin } from 'react-icons/si';

export const WalletActivity = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg text-white w-full lg:w-96">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">Wallet Activity</h4>
        <a href="#" className="text-blue-500 text-sm">See All</a>
      </div>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="bg-gray-700 p-2 rounded-full">
              <RiBtcLine size={24} />
            </span>
            <span>From BTC Wallet Binance</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500">+30.000</span>
            <span className="text-gray-400">08/05/2024</span>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="bg-gray-700 p-2 rounded-full">
              <SiBlockchaindotcom size={24} />
            </span>
            <span>To Ether Blockchain</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-red-500">-5.23</span>
            <span className="text-gray-400">07/26/2024</span>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="bg-gray-700 p-2 rounded-full">
              <SiLitecoin size={24} />
            </span>
            <span>From LiteCoin Wallet</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500">+1.000</span>
            <span className="text-gray-400">07/03/2024</span>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="bg-gray-700 p-2 rounded-full">
              <RiBtcLine size={24} />
            </span>
            <span>From BTC Wallet</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500">+900</span>
            <span className="text-gray-400">06/10/2024</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
