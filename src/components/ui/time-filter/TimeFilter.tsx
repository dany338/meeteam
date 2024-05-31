"use client";

import React, { useState } from 'react';

const TimeFilter: React.FC = () => {
  const [active, setActive] = useState('Monthly');

  const handleFilterChange = (filter: string) => {
    setActive(filter);
  };

  return (
    <div className="flex space-x-2">
      {['Monthly', 'Weekly', 'Daily'].map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`px-4 py-2 rounded-lg transition ${
            active === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;
