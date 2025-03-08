import React, { useState } from 'react';
import TraditionalStories from '../components/Cultural/TraditionalStories';
import WazeeBarazas from '../components/Cultural/WazeeBarazas';
import DictionaryUI from '../components/Cultural/DictionaryUI';
import ConsultationForum from '../components/Cultural/ConsultationForum';
import TraditionalDances from '../components/Cultural/TraditionalDances';

const CulturalPage = () => {
  const [activeTab, setActiveTab] = useState('stories');

  const tabs = [
    { id: 'stories', label: 'Traditional Stories', icon: 'fas fa-book-open' },
    { id: 'barazas', label: 'Wazee Barazas', icon: 'fas fa-users' },
    { id: 'dictionary', label: 'Dictionary', icon: 'fas fa-language' },
    { id: 'forum', label: 'Consultation', icon: 'fas fa-comments' },
    { id: 'dances', label: 'Traditional Dances', icon: 'fas fa-music' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'stories':
        return <TraditionalStories />;
      case 'barazas':
        return <WazeeBarazas />;
      case 'dictionary':
        return <DictionaryUI />;
      case 'forum':
        return <ConsultationForum />;
      case 'dances':
        return <TraditionalDances />;
      default:
        return <TraditionalStories />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cultural Heritage</h1>
            <p className="mt-2 text-gray-600">
              Explore and preserve our rich cultural heritage
            </p>
          </div>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
            <i className="fas fa-plus mr-2"></i>
            Contribute
          </button>
        </div>
      </div>

      {/* Cultural Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-book"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Stories Collected</p>
              <p className="text-2xl font-semibold">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Cultural Elders</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-language"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Dictionary Entries</p>
              <p className="text-2xl font-semibold">5,678</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-music"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Dance Tutorials</p>
              <p className="text-2xl font-semibold">89</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Banner */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured: Traditional Wedding Customs</h2>
            <p className="text-white/80 mb-4">
              Learn about the rich traditions and customs of Gusii traditional weddings
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
          <div className="text-6xl">👰</div>
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
                    ? 'border-indigo-500 text-indigo-600'
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

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Become a Cultural Ambassador</h2>
            <p className="text-white/80 mb-4">
              Help preserve our cultural heritage by sharing your knowledge and stories
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                Join Program
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-6xl">🏺</div>
        </div>
      </div>
    </div>
  );
};

export default CulturalPage;
