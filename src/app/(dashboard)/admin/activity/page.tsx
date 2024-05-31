import React from 'react';
import { Balance } from './ui/Balance';
import { Graph } from './ui/Graph';
import { WalletActivity } from './ui/WalletActivity';

export default function ActivityPage() {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1 bg-gray-900">
        <div className="p-4">
          <Balance />
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Graph />
            <WalletActivity />
          </div>
        </div>
      </div>
    </div>
  );
}