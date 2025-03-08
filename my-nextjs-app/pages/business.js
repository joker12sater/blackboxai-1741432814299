import React, { useState } from 'react';
import SubscriptionDashboard from '../components/Business/SubscriptionDashboard';
import AdManagement from '../components/Business/AdManagement';
import BusinessListings from '../components/Business/BusinessListings';
import PaymentIntegration from '../components/Business/PaymentIntegration';

const BusinessPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line' },
    { id: 'ads', label: 'Ad Management', icon: 'fas fa-ad' },
    { id: 'listings', label: 'Business Listings', icon: 'fas fa-store' },
    { id: 'payments', label: 'Payments', icon: 'fas fa-credit-card' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <SubscriptionDashboard />;
      case 'ads':
        return <AdManagement />;
      case 'listings':
        return <BusinessListings />;
      case 'payments':
        return <PaymentIntegration />;
      default:
        return <SubscriptionDashboard />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Business Center</h1>
        <p className="mt-2 text-gray-600">
          Manage your business presence, advertisements, and payments
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-users"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Subscribers</p>
              <p className="text-2xl font-semibold">2,453</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Ads</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-store"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Listed Businesses</p>
              <p className="text-2xl font-semibold">128</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-wallet"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="text-2xl font-semibold">$12.5K</p>
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
    </div>
  );
};

export default BusinessPage;
