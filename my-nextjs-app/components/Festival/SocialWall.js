import React, { useState } from 'react';

const SocialWall = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPostModal, setShowPostModal] = useState(false);

  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: '👩',
      },
      content: 'Amazing performance at the main stage! 🎵',
      media: 'video',
      likes: 234,
      comments: 45,
      timestamp: '5m ago',
      type: 'photo'
    },
    {
      id: 2,
      user: {
        name: 'Mike Chen',
        avatar: '👨',
      },
      content: 'The food here is incredible! Try the traditional dishes at stall 5 🍜',
      media: 'photo',
      likes: 156,
      comments: 23,
      timestamp: '15m ago',
      type: 'video'
    },
    {
      id: 3,
      user: {
        name: 'Lisa Wong',
        avatar: '👩',
      },
      content: 'Cultural dance performance was breathtaking! 💃',
      media: 'photo',
      likes: 342,
      comments: 67,
      timestamp: '30m ago',
      type: 'status'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Posts', icon: 'fas fa-globe' },
    { id: 'photo', label: 'Photos', icon: 'fas fa-camera' },
    { id: 'video', label: 'Videos', icon: 'fas fa-video' },
    { id: 'status', label: 'Status', icon: 'fas fa-comment' }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeFilter);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Social Wall</h2>
        <button
          onClick={() => setShowPostModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Create Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full flex items-center transition-colors ${
              activeFilter === filter.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <i className={`${filter.icon} mr-2`}></i>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map(post => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            {/* Post Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{post.user.avatar}</span>
                <div>
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>

            {/* Post Content */}
            <div className="p-4">
              <p className="mb-4">{post.content}</p>
              {post.media === 'photo' && (
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <i className="fas fa-image text-4xl text-gray-400"></i>
                </div>
              )}
              {post.media === 'video' && (
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <i className="fas fa-play-circle text-4xl text-gray-400"></i>
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="p-4 border-t">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <i className="fas fa-heart mr-2"></i>
                    {post.likes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <i className="fas fa-comment mr-2"></i>
                    {post.comments}
                  </button>
                </div>
                <button className="text-gray-600 hover:text-blue-500">
                  <i className="fas fa-share"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Create Post</h3>
                <button 
                  onClick={() => setShowPostModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <textarea
                className="w-full border rounded-lg p-3 mb-4"
                rows="4"
                placeholder="What's happening at the festival?"
              ></textarea>
              <div className="flex space-x-2 mb-4">
                <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-50">
                  <i className="fas fa-camera mr-2"></i>
                  Photo
                </button>
                <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-50">
                  <i className="fas fa-video mr-2"></i>
                  Video
                </button>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Feed Indicator */}
      <div className="mt-6 flex items-center justify-center text-gray-600">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Live Social Feed - Updates in Real-Time
      </div>
    </div>
  );
};

export default SocialWall;
