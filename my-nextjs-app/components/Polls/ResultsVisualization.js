import React, { useState } from 'react';

const ResultsVisualization = () => {
  const [activeView, setActiveView] = useState('polls');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  const pollResults = [
    {
      id: 1,
      question: 'What cultural event would you like to see next?',
      totalVotes: 713,
      options: [
        { text: 'Traditional Dance Festival', votes: 245, percentage: 34.4 },
        { text: 'Food & Cuisine Exhibition', votes: 189, percentage: 26.5 },
        { text: 'Cultural Fashion Show', votes: 156, percentage: 21.9 },
        { text: 'Art & Craft Fair', votes: 123, percentage: 17.2 }
      ],
      date: '2024-01-20'
    },
    {
      id: 2,
      question: 'Which traditional food should be featured?',
      totalVotes: 555,
      options: [
        { text: 'Ugali na Nyama', votes: 178, percentage: 32.1 },
        { text: 'Matoke', votes: 145, percentage: 26.1 },
        { text: 'Githeri', votes: 134, percentage: 24.1 },
        { text: 'Mukimo', votes: 98, percentage: 17.7 }
      ],
      date: '2024-01-19'
    }
  ];

  const surveyResults = {
    participationRate: {
      weekly: 45,
      monthly: 30,
      quarterly: 15,
      yearly: 7,
      rarely: 3
    },
    interests: {
      'Traditional Dance': 75,
      'Music Performances': 68,
      'Food Festivals': 82,
      'Art Exhibitions': 45,
      'Cultural Workshops': 55
    },
    preservation: {
      'Very Important': 65,
      'Important': 25,
      'Neutral': 7,
      'Less Important': 2,
      'Not Important': 1
    }
  };

  const engagementTrends = {
    week: [65, 72, 68, 74, 80, 85, 82],
    month: [70, 75, 72, 78],
    year: [65, 68, 72, 75, 78, 80, 82, 85, 83, 87, 85, 88]
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Results & Analytics</h2>
        <div className="flex space-x-2">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <i className="fas fa-download mr-2"></i>
            Export
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveView('polls')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeView === 'polls'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Poll Results
        </button>
        <button
          onClick={() => setActiveView('surveys')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeView === 'surveys'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Survey Insights
        </button>
      </div>

      {/* Results Display */}
      {activeView === 'polls' ? (
        <div className="space-y-6">
          {pollResults.map(poll => (
            <div key={poll.id} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">{poll.question}</h3>
              <div className="space-y-4">
                {poll.options.map((option, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{option.text}</span>
                      <span className="font-semibold">{option.percentage}%</span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                        <div
                          style={{ width: `${option.percentage}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{option.votes} votes</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Total Responses: {poll.totalVotes}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Participation Rate */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Event Participation Rate</h3>
            <div className="space-y-4">
              {Object.entries(surveyResults.participationRate).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{key}</span>
                    <span className="font-semibold">{value}%</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                      <div
                        style={{ width: `${value}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Interests */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">Cultural Activity Interests</h3>
            <div className="space-y-4">
              {Object.entries(surveyResults.interests).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span>{key}</span>
                    <span className="font-semibold">{value}%</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                      <div
                        style={{ width: `${value}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Engagement Trends */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Engagement Trends</h3>
        <div className="h-64 bg-gray-50 rounded-lg p-4">
          <div className="relative h-full">
            {/* Simplified trend line visualization */}
            <div className="absolute bottom-0 left-0 right-0 h-40">
              <div className="relative h-full">
                {engagementTrends[selectedTimeframe].map((value, index) => (
                  <div
                    key={index}
                    className="absolute bottom-0 bg-blue-500 rounded-t-lg transition-all duration-500"
                    style={{
                      left: `${(index / (engagementTrends[selectedTimeframe].length - 1)) * 100}%`,
                      height: `${value}%`,
                      width: '20px',
                      transform: 'translateX(-10px)'
                    }}
                  >
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm">
                      {value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-1">Total Responses</h4>
          <p className="text-2xl font-bold text-blue-600">1,268</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold mb-1">Average Engagement</h4>
          <p className="text-2xl font-bold text-green-600">76%</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold mb-1">Active Polls</h4>
          <p className="text-2xl font-bold text-purple-600">5</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-semibold mb-1">Completion Rate</h4>
          <p className="text-2xl font-bold text-yellow-600">92%</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsVisualization;
