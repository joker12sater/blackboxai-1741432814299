import React, { useState } from 'react';
import InteractiveMap from '../components/Festival/InteractiveMap';
import LiveStreaming from '../components/Festival/LiveStreaming';
import AugmentedReality from '../components/Festival/AugmentedReality';
import SocialWall from '../components/Festival/SocialWall';
import Chatbot from '../components/Festival/Chatbot';
import NFTMarketplace from '../components/Festival/NFTMarketplace';

const FestivalPage = () => {
  const [activeTab, setActiveTab] = useState('map');

  const tabs = [
    { id: 'map', label: 'Festival Map', icon: 'fas fa-map-marked-alt' },
    { id: 'live', label: 'Live Streams', icon: 'fas fa-video' },
    { id: 'ar', label: 'AR Experience', icon: 'fas fa-vr-cardboard' },
    { id: 'social', label: 'Social Wall', icon: 'fas fa-stream' },
    { id: 'nft', label: 'NFT Market', icon: 'fas fa-store' },
    { id: 'help', label: 'Festival Help', icon: 'fas fa-question-circle' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return <InteractiveMap />;
      case 'live':
        return <LiveStreaming />;
      case 'ar':
        return <AugmentedReality />;
      case 'social':
        return <SocialWall />;
      case 'nft':
        return <NFTMarketplace />;
      case 'help':
        return <Chatbot />;
      default:
        return <InteractiveMap />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Urban Cultural Festival</h1>
            <p className="mt-2 text-gray-600">
              Experience culture through technology and innovation
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              <i className="fas fa-ticket-alt mr-2"></i>
              Get Tickets
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              <i className="fas fa-calendar-alt mr-2"></i>
              Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Festival Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Attendees</p>
              <p className="text-2xl font-semibold">5,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-music"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Live Events</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-store"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Vendors</p>
              <p className="text-2xl font-semibold">86</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-image"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">NFTs Minted</p>
              <p className="text-2xl font-semibold">1,892</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Event Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="animate-pulse mr-4">
              <i className="fas fa-circle text-red-200"></i>
            </div>
            <div>
              <p className="font-bold">LIVE NOW</p>
              <p>Main Stage: Traditional Dance Performance</p>
            </div>
          </div>
          <button className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
            Watch Now
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="border-b">
          <nav className="flex flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-center border-b-2 transition-colors ${
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

      {/* Download App Banner */}
      <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Get the Festival App</h2>
            <p className="text-white/80 mb-4">
              Download our app for an enhanced festival experience with AR features and real-time updates
            </p>
            <div className="flex space-x-4">
              <button className="bg-black px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                <i className="fab fa-apple mr-2"></i>
                App Store
              </button>
              <button className="bg-black px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                <i className="fab fa-google-play mr-2"></i>
                Play Store
              </button>
            </div>
          </div>
          <div className="text-6xl">📱</div>
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
