import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const modules = [
    {
      title: 'Business',
      description: 'Manage business listings, ads, and payments',
      icon: '💼',
      link: '/business',
      color: 'bg-blue-500'
    },
    {
      title: 'Stories',
      description: 'Share and discover cultural stories',
      icon: '📖',
      link: '/stories',
      color: 'bg-green-500'
    },
    {
      title: 'News & Events',
      description: 'Stay updated with latest news and events',
      icon: '📰',
      link: '/news',
      color: 'bg-yellow-500'
    },
    {
      title: 'Festival',
      description: 'Explore urban festival features',
      icon: '🎉',
      link: '/festival',
      color: 'bg-purple-500'
    },
    {
      title: 'University',
      description: 'Connect with university community',
      icon: '🎓',
      link: '/university',
      color: 'bg-red-500'
    },
    {
      title: 'Cultural',
      description: 'Discover and preserve cultural heritage',
      icon: '🏺',
      link: '/cultural',
      color: 'bg-indigo-500'
    },
    {
      title: 'Polls & Surveys',
      description: 'Participate in community feedback',
      icon: '📊',
      link: '/polls',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Whisper Heritage Web App
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Whisper Heritage</h2>
          <p className="text-gray-600">
            Explore and celebrate our rich cultural heritage through various interactive modules.
            Connect with the community, share stories, and participate in cultural events.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link 
              key={index}
              href={module.link}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${module.color} p-6 flex items-center justify-center text-4xl`}>
                  {module.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600">
                    {module.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl mb-2">👥</div>
            <h4 className="text-lg font-semibold">Active Users</h4>
            <p className="text-3xl font-bold text-blue-500">2.5K</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl mb-2">📚</div>
            <h4 className="text-lg font-semibold">Stories Shared</h4>
            <p className="text-3xl font-bold text-green-500">850</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl mb-2">🎭</div>
            <h4 className="text-lg font-semibold">Cultural Events</h4>
            <p className="text-3xl font-bold text-purple-500">120</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl mb-2">🤝</div>
            <h4 className="text-lg font-semibold">Community Rating</h4>
            <p className="text-3xl font-bold text-yellow-500">4.8</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2024 Whisper Heritage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
