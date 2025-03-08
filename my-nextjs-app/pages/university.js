import React, { useState } from 'react';
import ChatRooms from '../components/University/ChatRooms';
import PrivateChat from '../components/University/PrivateChat';
import ZoomIntegration from '../components/University/ZoomIntegration';
import AlumniCorner from '../components/University/AlumniCorner';

const UniversityPage = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const tabs = [
    { id: 'chat', label: 'Chat Rooms', icon: 'fas fa-comments' },
    { id: 'private', label: 'Private Messages', icon: 'fas fa-envelope' },
    { id: 'zoom', label: 'Virtual Classes', icon: 'fas fa-video' },
    { id: 'alumni', label: 'Alumni Network', icon: 'fas fa-user-graduate' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatRooms />;
      case 'private':
        return <PrivateChat />;
      case 'zoom':
        return <ZoomIntegration />;
      case 'alumni':
        return <AlumniCorner />;
      default:
        return <ChatRooms />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">University Hub</h1>
            <p className="mt-2 text-gray-600">
              Connect, learn, and engage with the university community
            </p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <i className="fas fa-calendar-plus mr-2"></i>
            Schedule Class
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Students</p>
              <p className="text-2xl font-semibold">2,845</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Online Classes</p>
              <p className="text-2xl font-semibold">42</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Alumni Network</p>
              <p className="text-2xl font-semibold">12.5K</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-comments"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Chats</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Class Alert */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <i className="fas fa-bell text-blue-500"></i>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Your next class "Cultural Heritage Studies" starts in 30 minutes
            </p>
          </div>
          <div className="ml-auto pl-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Join Now
            </button>
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

      {/* Resources Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <i className="fas fa-book text-3xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Digital Library</h3>
          <p className="mb-4 text-blue-100">Access thousands of digital resources and research materials</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Browse Library
          </button>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <i className="fas fa-laptop-code text-3xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Online Courses</h3>
          <p className="mb-4 text-green-100">Explore our collection of online courses and tutorials</p>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
            View Courses
          </button>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <i className="fas fa-handshake text-3xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Career Center</h3>
          <p className="mb-4 text-purple-100">Connect with employers and explore career opportunities</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
