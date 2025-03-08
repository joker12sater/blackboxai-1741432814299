import React, { useState } from 'react';

const RealTimePoll = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);

  const polls = [
    {
      id: 1,
      question: 'What cultural event would you like to see next?',
      options: [
        { id: 1, text: 'Traditional Dance Festival', votes: 245 },
        { id: 2, text: 'Food & Cuisine Exhibition', votes: 189 },
        { id: 3, text: 'Cultural Fashion Show', votes: 156 },
        { id: 4, text: 'Art & Craft Fair', votes: 123 }
      ],
      totalVotes: 713,
      status: 'active',
      endTime: '2024-01-25 18:00',
      creator: 'Community Team'
    },
    {
      id: 2,
      question: 'Which traditional food should be featured in next month\'s festival?',
      options: [
        { id: 1, text: 'Ugali na Nyama', votes: 178 },
        { id: 2, text: 'Matoke', votes: 145 },
        { id: 3, text: 'Githeri', votes: 134 },
        { id: 4, text: 'Mukimo', votes: 98 }
      ],
      totalVotes: 555,
      status: 'active',
      endTime: '2024-01-26 20:00',
      creator: 'Food Committee'
    }
  ];

  const calculatePercentage = (votes, total) => {
    return ((votes / total) * 100).toFixed(1);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Real-Time Polls</h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Create Poll
        </button>
      </div>

      {/* Active Polls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {polls.map(poll => (
          <div
            key={poll.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{poll.question}</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Live
              </span>
            </div>

            {/* Poll Options */}
            <div className="space-y-3 mb-4">
              {poll.options.map(option => (
                <div key={option.id} className="relative">
                  <button
                    onClick={() => setSelectedPoll(poll)}
                    className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between mb-1">
                      <span>{option.text}</span>
                      <span className="font-semibold">
                        {calculatePercentage(option.votes, poll.totalVotes)}%
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                        <div
                          style={{ width: `${calculatePercentage(option.votes, poll.totalVotes)}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Poll Info */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex space-x-4">
                <span>
                  <i className="fas fa-user mr-1"></i>
                  {poll.creator}
                </span>
                <span>
                  <i className="fas fa-users mr-1"></i>
                  {poll.totalVotes} votes
                </span>
              </div>
              <span>
                <i className="fas fa-clock mr-1"></i>
                Ends: {poll.endTime}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Poll Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Create New Poll</h3>
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
                    Question
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your question"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Options
                  </label>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(num => (
                      <input
                        key={num}
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder={`Option ${num}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Create Poll
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

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-1">Active Polls</h4>
          <p className="text-2xl font-bold text-blue-600">5</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold mb-1">Total Responses</h4>
          <p className="text-2xl font-bold text-green-600">1,268</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold mb-1">Engagement Rate</h4>
          <p className="text-2xl font-bold text-purple-600">85%</p>
        </div>
      </div>
    </div>
  );
};

export default RealTimePoll;
