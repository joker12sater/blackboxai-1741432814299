import React from 'react';

const AdManagement = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ad Management</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Ad Title</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter ad title" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ad Content</label>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter ad content" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit Ad</button>
      </form>
    </div>
  );
};

export default AdManagement;
