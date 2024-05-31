"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { TextComponent } from '../ui/TextComponent';

interface Props {
  icon: React.ReactNode;
  label: string;
  value: string;
  percentage: number;
  color: string;
  chartData: any;
}

export const CardComponent = ({ icon, label, value, percentage, color, chartData }: Props) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        {icon}
        <TextComponent label={label} value={value} percentage={percentage} color={color} />
      </div>
      <div className="h-16">
        <Line data={chartData} options={{
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
            }
          },
          elements: {
            line: {
              tension: 0.4
            },
            point: {
              radius: 0
            }
          }
        }} />
      </div>
    </div>
  );
}
