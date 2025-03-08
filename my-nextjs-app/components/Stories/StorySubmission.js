import React, { useState } from 'react';

const StorySubmission = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle story submission logic here
    console.log({ title, content, media });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Story Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter story title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Story Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Write your story here"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Media</label>
          <input
            type="file"
            onChange={(e) => setMedia(e.target.files[0])}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit Story</button>
      </form>
    </div>
  );
};

export default StorySubmission;
