import React, { useState } from 'react';

const AlumniCorner = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showPostModal, setShowPostModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      postedBy: 'John Smith (Class of 2018)',
      postedDate: '2 days ago',
      description: 'Looking for a full-stack developer with 2+ years of experience...'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Global Marketing Co.',
      location: 'New York, NY',
      type: 'Full-time',
      postedBy: 'Sarah Johnson (Class of 2015)',
      postedDate: '1 week ago',
      description: 'Seeking an experienced marketing professional...'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      role: 'Senior Research Scientist',
      company: 'BioTech Research',
      graduationYear: '2010',
      expertise: ['Biotechnology', 'Research', 'Data Analysis'],
      availability: 'Available for mentoring'
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'CEO',
      company: 'StartUp Innovations',
      graduationYear: '2008',
      expertise: ['Entrepreneurship', 'Business Strategy', 'Leadership'],
      availability: 'Limited availability'
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Alumni Corner</h2>
        <button
          onClick={() => setShowPostModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Post Opportunity
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'jobs'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-briefcase mr-2"></i>
          Job Postings
        </button>
        <button
          onClick={() => setActiveTab('mentorship')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'mentorship'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-users mr-2"></i>
          Mentorship
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'jobs' ? (
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted by {job.postedBy}</span>
                <span>{job.postedDate}</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Apply Now
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {mentors.map(mentor => (
            <div key={mentor.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <span className="text-sm text-gray-500">Class of {mentor.graduationYear}</span>
              </div>
              <p className="text-gray-600 mb-2">{mentor.role} at {mentor.company}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">
                  <i className="fas fa-circle text-xs mr-1"></i>
                  {mentor.availability}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Request Mentorship
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Post New Opportunity</h3>
                <button 
                  onClick={() => setShowPostModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Job Posting</option>
                    <option>Mentorship Offer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPostModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniCorner;
