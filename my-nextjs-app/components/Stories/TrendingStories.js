import React, { useState } from 'react';

const TrendingStories = () => {
  const [filter, setFilter] = useState('trending'); // 'trending' or 'recent'
  
  const stories = [
    { id: 1, title: 'Story One', views: 1000, date: '2024-01-20' },
    { id: 2, title: 'Story Two', views: 800, date: '2024-01-19' },
    { id: 3, title: 'Story Three', views: 1200, date: '2024-01-18' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Stories</h2>
        <div className="space-x-2">
          <button 
            onClick={() => setFilter('trending')}
            className={`py-2 px-4 rounded ${filter === 'trending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Trending
          </button>
          <button 
            onClick={() => setFilter('recent')}
            className={`py-2 px-4 rounded ${filter === 'recent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Recent
          </button>
        </div>
      </div>
      <ul className="space-y-4">
        {stories.map((story) => (
          <li key={story.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{story.title}</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{story.views} views</span>
              <span>Posted: {story.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingStories;
