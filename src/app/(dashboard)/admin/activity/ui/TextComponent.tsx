"use client";

import React from 'react'

interface Props {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

export const TextComponent = ({ label, value, percentage, color }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm text-gray-400">{label}</span>
      <div className="flex items-center">
        <span className="text-lg font-semibold text-white">{value}</span>
        <span className={`ml-2 text-sm font-medium ${color === 'green' ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
    </div>
  );
}
