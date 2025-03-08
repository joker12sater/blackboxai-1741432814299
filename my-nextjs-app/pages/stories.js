import React, { useState } from 'react';
import StorySubmission from '../components/Stories/StorySubmission';
import ModerationPanel from '../components/Stories/ModerationPanel';
import Engagement from '../components/Stories/Engagement';
import TrendingStories from '../components/Stories/TrendingStories';

const StoriesPage = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const tabs = [
    { id: 'trending', label: 'Trending Stories', icon: 'fas fa-fire' },
    { id: 'submit', label: 'Submit Story', icon: 'fas fa-pen' },
    { id: 'moderate', label: 'Moderation', icon: 'fas fa-shield-alt' },
    { id: 'engage', label: 'Engagement', icon: 'fas fa-heart' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'trending':
        return <TrendingStories />;
      case 'submit':
        return <StorySubmission />;
      case 'moderate':
        return <ModerationPanel />;
      case 'engage':
        return <Engagement />;
      default:
        return <TrendingStories />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Stories</h1>
        <p className="mt-2 text-gray-600">
          Share, discover, and engage with stories from our community
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-book"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Stories</p>
              <p className="text-2xl font-semibold">856</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Contributors</p>
              <p className="text-2xl font-semibold">234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-star"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Featured Stories</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-heart"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Engagements</p>
              <p className="text-2xl font-semibold">15.2K</p>
            </div>
          </div>
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

      {/* Featured Story Preview */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Story</h2>
            <h3 className="text-xl mb-4">The Origins of Our Community</h3>
            <p className="text-white/80 mb-4">
              Discover the fascinating history behind our community's foundation and the values that
              shape us today...
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Read More
            </button>
          </div>
          <div className="text-6xl">📖</div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
