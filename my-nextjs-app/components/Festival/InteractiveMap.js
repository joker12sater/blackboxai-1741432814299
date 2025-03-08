import React, { useState } from 'react';

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  // Sample event locations
  const eventLocations = [
    { id: 1, name: 'Main Stage', coordinates: { x: 30, y: 40 }, type: 'stage' },
    { id: 2, name: 'Food Court', coordinates: { x: 60, y: 30 }, type: 'food' },
    { id: 3, name: 'Art Gallery', coordinates: { x: 45, y: 60 }, type: 'art' },
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Festival Map</h2>
      
      {/* Map Controls */}
      <div className="mb-4 flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <i className="fas fa-plus mr-2"></i>Zoom In
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <i className="fas fa-minus mr-2"></i>Zoom Out
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          <i className="fas fa-location-arrow mr-2"></i>Current Location
        </button>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        {/* This would be replaced with an actual map implementation */}
        <div className="absolute inset-0 p-4">
          {eventLocations.map((location) => (
            <button
              key={location.id}
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => handleLocationClick(location)}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${location.type === 'stage' ? 'bg-red-500' :
                  location.type === 'food' ? 'bg-green-500' :
                  'bg-blue-500'} text-white
              `}>
                <i className={`fas ${
                  location.type === 'stage' ? 'fa-music' :
                  location.type === 'food' ? 'fa-utensils' :
                  'fa-palette'
                }`}></i>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Location Details */}
      {selectedLocation && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">{selectedLocation.name}</h3>
          <p className="text-gray-600">
            Location Type: {selectedLocation.type.charAt(0).toUpperCase() + selectedLocation.type.slice(1)}
          </p>
          <div className="mt-2 flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
              Get Directions
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
              View Schedule
            </button>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Legend</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>Stages</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Food</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span>Art</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
