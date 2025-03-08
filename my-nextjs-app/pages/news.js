import React, { useState } from 'react';
import NewsFeed from '../components/News/NewsFeed';
import EventCalendar from '../components/News/EventCalendar';
import ContentLock from '../components/News/ContentLock';
import LiveUpdates from '../components/News/LiveUpdates';

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isUserPremium] = useState(false); // This would come from your auth context

  const tabs = [
    { id: 'feed', label: 'News Feed', icon: 'fas fa-newspaper' },
    { id: 'events', label: 'Events', icon: 'fas fa-calendar' },
    { id: 'live', label: 'Live Updates', icon: 'fas fa-broadcast-tower' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <ContentLock isPremium={true} isUserPremium={isUserPremium}>
            <NewsFeed />
          </ContentLock>
        );
      case 'events':
        return <EventCalendar />;
      case 'live':
        return <LiveUpdates />;
      default:
        return <NewsFeed />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">News & Events</h1>
            <p className="mt-2 text-gray-600">
              Stay updated with the latest news and upcoming events
            </p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full animate-pulse">
            <i className="fas fa-circle mr-2"></i>
            Live
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-newspaper"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Articles Published</p>
              <p className="text-2xl font-semibold">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-calendar"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Upcoming Events</p>
              <p className="text-2xl font-semibold">28</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Readers</p>
              <p className="text-2xl font-semibold">5.2K</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-star"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Premium Content</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Banner */}
      <div className="bg-red-500 text-white p-4 rounded-lg mb-8">
        <div className="flex items-center">
          <span className="font-bold mr-4">BREAKING NEWS</span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              Major cultural festival announced for next month • New community center opening ceremony • Traditional dance competition winners declared
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

      {/* Newsletter Subscription */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for daily news updates and event notifications
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-700"
              />
              <button className="bg-blue-700 px-6 py-2 rounded-r-lg hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-6xl">📰</div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
