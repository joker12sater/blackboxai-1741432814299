import React, { useState } from 'react';

const LiveStreaming = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [quality, setQuality] = useState('720p');
  const [currentStream, setCurrentStream] = useState('main-stage');

  const streams = [
    { id: 'main-stage', name: 'Main Stage', viewers: 1520 },
    { id: 'second-stage', name: 'Second Stage', viewers: 843 },
    { id: 'dance-arena', name: 'Dance Arena', viewers: 657 },
  ];

  const qualities = ['1080p', '720p', '480p', '360p'];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Live Streaming</h2>

      {/* Video Player */}
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying ? (
            <button 
              onClick={() => setIsPlaying(true)}
              className="bg-white/20 hover:bg-white/30 rounded-full p-4 backdrop-blur-sm transition-colors"
            >
              <i className="fas fa-play text-white text-4xl"></i>
            </button>
          ) : (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <button onClick={() => setIsPlaying(false)}>
                    <i className="fas fa-pause"></i>
                  </button>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-volume-up"></i>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-24"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <select 
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="bg-transparent border border-white/30 rounded px-2 py-1"
                  >
                    {qualities.map(q => (
                      <option key={q} value={q} className="text-black">
                        {q}
                      </option>
                    ))}
                  </select>
                  <button className="hover:text-red-500">
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stream Information */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {streams.find(s => s.id === currentStream)?.name}
          </h3>
          <div className="flex items-center text-red-500">
            <i className="fas fa-circle text-xs animate-pulse mr-2"></i>
            <span>LIVE</span>
            <span className="ml-2 text-gray-600">
              {streams.find(s => s.id === currentStream)?.viewers} viewers
            </span>
          </div>
        </div>
      </div>

      {/* Available Streams */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {streams.map(stream => (
          <button
            key={stream.id}
            onClick={() => setCurrentStream(stream.id)}
            className={`p-4 rounded-lg transition-colors ${
              currentStream === stream.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{stream.name}</span>
              <span className="text-sm">
                {stream.viewers} viewers
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Chat and Interaction */}
      <div className="mt-6">
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded">
            <i className="fas fa-comment mr-2"></i>Open Chat
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded">
            <i className="fas fa-share mr-2"></i>Share Stream
          </button>
          <button className="flex-1 bg-purple-500 text-white py-2 px-4 rounded">
            <i className="fas fa-gift mr-2"></i>Send Gift
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStreaming;
