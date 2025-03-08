import React, { useState, useEffect } from 'react';

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Simulated live updates
  const sampleUpdates = [
    { id: 1, message: 'Breaking News: Community Event Announced', timestamp: '2 minutes ago', type: 'breaking' },
    { id: 2, message: 'Weather Update: Sunny conditions expected', timestamp: '5 minutes ago', type: 'weather' },
    { id: 3, message: 'Traffic Alert: Road maintenance on Main Street', timestamp: '10 minutes ago', type: 'traffic' },
  ];

  useEffect(() => {
    // Simulate receiving live updates
    setUpdates(sampleUpdates);
  }, []);

  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Live Updates</h2>
      
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Live Updates Feed */}
      <div className="space-y-4">
        {updates.map(update => (
          <div 
            key={update.id} 
            className={`p-4 rounded-lg ${
              update.type === 'breaking' ? 'bg-red-50 border-l-4 border-red-500' :
              update.type === 'weather' ? 'bg-blue-50 border-l-4 border-blue-500' :
              'bg-gray-50 border-l-4 border-gray-500'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{update.message}</p>
                <p className="text-sm text-gray-600">{update.timestamp}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                update.type === 'breaking' ? 'bg-red-100 text-red-800' :
                update.type === 'weather' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {update.type.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Push Notification Settings */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Notification Settings</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Breaking News</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Weather Updates</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Traffic Alerts</span>
          </label>
        </div>
        <button 
          onClick={() => showToast('Settings saved successfully!')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Save Preferences
        </button>
      </div>

      {/* Real-time Status Indicator */}
      <div className="mt-6 flex items-center">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm text-gray-600">Live Updates Active</span>
      </div>
    </div>
  );
};

export default LiveUpdates;
