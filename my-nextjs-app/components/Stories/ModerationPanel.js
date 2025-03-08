import React from 'react';

const ModerationPanel = () => {
  const pendingStories = [
    { id: 1, title: 'Story One', status: 'Pending' },
    { id: 2, title: 'Story Two', status: 'Pending' },
  ];

  const handleApprove = (id) => {
    // Handle story approval logic here
    console.log(`Approved story with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Handle story rejection logic here
    console.log(`Rejected story with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Moderation Panel</h2>
      <ul className="space-y-4">
        {pendingStories.map((story) => (
          <li key={story.id} className="border-b pb-2 flex justify-between">
            <span className="text-lg font-semibold">{story.title}</span>
            <div>
              <button onClick={() => handleApprove(story.id)} className="bg-green-500 text-white py-1 px-3 rounded mr-2">Approve</button>
              <button onClick={() => handleReject(story.id)} className="bg-red-500 text-white py-1 px-3 rounded">Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModerationPanel;
