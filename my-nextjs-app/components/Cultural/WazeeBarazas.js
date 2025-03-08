import React, { useState } from 'react';

const WazeeBarazas = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const discussions = [
    {
      id: 1,
      title: 'Traditional Marriage Customs',
      elder: 'Mzee Mogaka',
      participants: 45,
      date: '2024-01-25',
      time: '10:00 AM',
      status: 'upcoming',
      description: 'Discussion about traditional marriage customs and their significance in modern times.'
    },
    {
      id: 2,
      title: 'Cultural Preservation',
      elder: 'Mzee Nyambane',
      participants: 32,
      date: '2024-01-24',
      time: '2:00 PM',
      status: 'completed',
      description: 'Exploring ways to preserve our cultural heritage for future generations.'
    },
    {
      id: 3,
      title: 'Traditional Medicine',
      elder: 'Mzee Kemunto',
      participants: 28,
      date: '2024-01-26',
      time: '3:00 PM',
      status: 'upcoming',
      description: 'Knowledge sharing about traditional medicinal practices and herbs.'
    }
  ];

  const recordings = [
    {
      id: 1,
      title: 'History of Gusii People',
      elder: 'Mzee Ogembo',
      duration: '1:45:30',
      date: '2024-01-20',
      views: 234
    },
    {
      id: 2,
      title: 'Traditional Leadership Structures',
      elder: 'Mzee Nyaundi',
      duration: '2:15:00',
      date: '2024-01-18',
      views: 189
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Wazee Barazas</h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Schedule Baraza
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('discussions')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'discussions'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-comments mr-2"></i>
          Live Discussions
        </button>
        <button
          onClick={() => setActiveTab('recordings')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'recordings'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-video mr-2"></i>
          Recordings
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'discussions' ? (
        <div className="space-y-4">
          {discussions.map(discussion => (
            <div key={discussion.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{discussion.title}</h3>
                  <p className="text-gray-600">Led by {discussion.elder}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  discussion.status === 'upcoming'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {discussion.status.charAt(0).toUpperCase() + discussion.status.slice(1)}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{discussion.description}</p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex space-x-4 text-gray-600">
                  <span>
                    <i className="fas fa-calendar mr-1"></i>
                    {discussion.date}
                  </span>
                  <span>
                    <i className="fas fa-clock mr-1"></i>
                    {discussion.time}
                  </span>
                  <span>
                    <i className="fas fa-users mr-1"></i>
                    {discussion.participants} participants
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Join Discussion
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recordings.map(recording => (
            <div key={recording.id} className="border rounded-lg overflow-hidden">
              <div className="relative bg-gray-100 aspect-video flex items-center justify-center">
                <i className="fas fa-play-circle text-4xl text-gray-400"></i>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{recording.title}</h3>
                <p className="text-gray-600 text-sm mb-2">By {recording.elder}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <span>
                      <i className="fas fa-clock mr-1"></i>
                      {recording.duration}
                    </span>
                    <span>
                      <i className="fas fa-eye mr-1"></i>
                      {recording.views} views
                    </span>
                  </div>
                  <span>{recording.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Schedule Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Schedule New Baraza</h3>
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter discussion topic"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Elder
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter elder's name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    placeholder="Enter discussion description"
                  ></textarea>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Schedule
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WazeeBarazas;
