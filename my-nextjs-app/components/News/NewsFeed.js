import React, { useState } from 'react';

const NewsFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'local', 'business', 'culture', 'technology'];
  
  const newsItems = [
    { id: 1, title: 'Local News Story', category: 'local', content: 'Lorem ipsum dolor sit amet...', date: '2024-01-20' },
    { id: 2, title: 'Business Update', category: 'business', content: 'Consectetur adipiscing elit...', date: '2024-01-19' },
    { id: 3, title: 'Cultural Event', category: 'culture', content: 'Sed do eiusmod tempor...', date: '2024-01-18' },
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">News Feed</h2>
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded capitalize ${
                selectedCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {filteredNews.map(news => (
          <article key={news.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className="text-gray-600 mb-2">{news.content}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="capitalize">{news.category}</span>
              <span>{news.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
