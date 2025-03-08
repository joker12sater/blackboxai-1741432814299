import React, { useState } from 'react';

const TraditionalStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: 'The Origin of Gusii People',
      category: 'Origin Stories',
      author: 'Elder Mogaka',
      content: 'Long ago, in the hills of Kisii...',
      moral: 'Unity and perseverance lead to success',
      likes: 245,
      shares: 56
    },
    {
      id: 2,
      title: 'The Wise Chief',
      category: 'Leadership',
      author: 'Elder Nyambane',
      content: 'There once was a chief who ruled with wisdom...',
      moral: 'True leadership comes from wisdom and compassion',
      likes: 189,
      shares: 42
    },
    {
      id: 3,
      title: 'The First Harvest',
      category: 'Cultural Practices',
      author: 'Elder Kemunto',
      content: 'When the first rains came...',
      moral: 'Respect for nature brings abundance',
      likes: 167,
      shares: 38
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Traditional Stories</h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stories..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredStories.map(story => (
          <div
            key={story.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {story.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Narrated by {story.author}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {story.content}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex space-x-4">
                  <span>
                    <i className="fas fa-heart text-red-500 mr-1"></i>
                    {story.likes}
                  </span>
                  <span>
                    <i className="fas fa-share text-blue-500 mr-1"></i>
                    {story.shares}
                  </span>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedStory.title}</h3>
                  <p className="text-gray-600">Narrated by {selectedStory.author}</p>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 mb-4">{selectedStory.content}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="text-lg font-semibold mb-2">Moral of the Story</h4>
                  <p className="text-gray-700">{selectedStory.moral}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-red-500">
                    <i className="fas fa-heart mr-2"></i>
                    Like
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <i className="fas fa-share mr-2"></i>
                    Share
                  </button>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Download Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Navigation */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {['All Stories', 'Origin Stories', 'Leadership', 'Cultural Practices', 'Moral Stories'].map(category => (
            <button
              key={category}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionalStories;
