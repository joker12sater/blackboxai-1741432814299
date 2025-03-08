import React from 'react';

const Engagement = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Engagement</h2>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Like</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Comment</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Share</button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Likes: 0</h3>
        <h3 className="text-lg font-semibold">Comments: 0</h3>
        <h3 className="text-lg font-semibold">Shares: 0</h3>
      </div>
    </div>
  );
};

export default Engagement;
