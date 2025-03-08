import React, { useState } from 'react';
import RealTimePoll from '../components/Polls/RealTimePoll';
import SurveyForm from '../components/Polls/SurveyForm';
import ResultsVisualization from '../components/Polls/ResultsVisualization';

const PollsPage = () => {
  const [activeTab, setActiveTab] = useState('polls');

  const tabs = [
    { id: 'polls', label: 'Active Polls', icon: 'fas fa-poll' },
    { id: 'surveys', label: 'Surveys', icon: 'fas fa-clipboard-list' },
    { id: 'results', label: 'Analytics', icon: 'fas fa-chart-bar' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'polls':
        return <RealTimePoll />;
      case 'surveys':
        return <SurveyForm />;
      case 'results':
        return <ResultsVisualization />;
      default:
        return <RealTimePoll />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Polls & Surveys</h1>
            <p className="mt-2 text-gray-600">
              Participate in community polls and provide valuable feedback
            </p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <i className="fas fa-plus mr-2"></i>
            Create Poll
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-poll"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Polls</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Responses</p>
              <p className="text-2xl font-semibold">2.5K</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Completion Rate</p>
              <p className="text-2xl font-semibold">85%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-award"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Rewards Given</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Poll Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Poll: Community Development</h2>
            <p className="text-white/80 mb-4">
              Share your thoughts on upcoming community development projects
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Vote Now
            </button>
          </div>
          <div className="text-6xl">📊</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="border-b">
          <nav className="flex -mb-px">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-4 text-center border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white shadow rounded-lg">
        {renderContent()}
      </div>

      {/* Rewards Program */}
      <div className="mt-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Poll Rewards Program</h2>
            <p className="text-white/80 mb-4">
              Earn points and rewards by participating in polls and surveys
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                Join Program
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-6xl">🎁</div>
        </div>
      </div>
    </div>
  );
};

export default PollsPage;
