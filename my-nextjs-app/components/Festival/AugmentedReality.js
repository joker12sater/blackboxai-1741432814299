import React, { useState } from 'react';

const AugmentedReality = () => {
  const [activeTab, setActiveTab] = useState('filters');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [huntProgress, setHuntProgress] = useState(30); // percentage

  const filters = [
    { id: 1, name: 'Festival Vibes', icon: '🎭' },
    { id: 2, name: 'Neon Glow', icon: '✨' },
    { id: 3, name: 'Cultural Mask', icon: '🎨' },
    { id: 4, name: 'Dance Party', icon: '💃' },
  ];

  const huntLocations = [
    { id: 1, name: 'Main Stage Treasure', found: true },
    { id: 2, name: 'Art Gallery Secret', found: true },
    { id: 3, name: 'Food Court Mystery', found: false },
    { id: 4, name: 'Cultural Corner Quest', found: false },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Augmented Reality Experience</h2>

      {/* AR Mode Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('filters')}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeTab === 'filters'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-camera mr-2"></i>
          Selfie Filters
        </button>
        <button
          onClick={() => setActiveTab('hunt')}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeTab === 'hunt'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-search mr-2"></i>
          Scavenger Hunt
        </button>
      </div>

      {/* Camera Preview */}
      <div className="relative w-full aspect-[3/4] bg-black rounded-lg overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {activeTab === 'filters' ? (
            <div className="text-center">
              <i className="fas fa-camera text-6xl mb-4"></i>
              <p>Camera Preview</p>
            </div>
          ) : (
            <div className="text-center">
              <i className="fas fa-compass text-6xl mb-4"></i>
              <p>AR Hunt View</p>
            </div>
          )}
        </div>

        {/* Camera Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <i className="fas fa-sync text-white"></i>
          </button>
          <button className="bg-white/20 p-6 rounded-full backdrop-blur-sm">
            <i className="fas fa-circle text-white text-2xl"></i>
          </button>
          <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <i className="fas fa-images text-white"></i>
          </button>
        </div>
      </div>

      {activeTab === 'filters' ? (
        /* Filters Section */
        <div>
          <h3 className="text-lg font-semibold mb-3">Available Filters</h3>
          <div className="grid grid-cols-2 gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedFilter === filter.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                <div className="text-3xl mb-2">{filter.icon}</div>
                <div className="font-medium">{filter.name}</div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Scavenger Hunt Section */
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Hunt Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all"
                style={{ width: `${huntProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-3">
            {huntLocations.map(location => (
              <div
                key={location.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="flex items-center">
                  <i className={`fas fa-${location.found ? 'check-circle text-green-500' : 'circle text-gray-400'} mr-3`}></i>
                  {location.name}
                </span>
                {!location.found && (
                  <button className="text-blue-500 hover:text-blue-600">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    Find
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tutorial Tooltip */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">
          <i className="fas fa-lightbulb mr-2"></i>
          Quick Tip
        </h4>
        <p className="text-yellow-700">
          {activeTab === 'filters'
            ? 'Point your camera at your face to try on different festival-themed filters!'
            : 'Look for AR markers around the festival grounds to unlock special rewards!'}
        </p>
      </div>
    </div>
  );
};

export default AugmentedReality;
