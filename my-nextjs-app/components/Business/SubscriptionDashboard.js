import React from 'react';

const SubscriptionDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscription Dashboard</h2>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-lg">Free Plan</span>
          <span className="text-gray-600">Users: 100</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg">Premium Plan</span>
          <span className="text-gray-600">Users: 50</span>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Upgrade to Premium</button>
    </div>
  );
};

export default SubscriptionDashboard;
