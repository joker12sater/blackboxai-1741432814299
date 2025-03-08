import React, { useState } from 'react';

const ZoomIntegration = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [meetingId, setMeetingId] = useState('');
  const [password, setPassword] = useState('');

  const scheduledMeetings = [
    {
      id: 1,
      title: 'Computer Science Lecture',
      host: 'Prof. Anderson',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '1 hour',
      participants: 45,
      meetingId: '123-456-789',
    },
    {
      id: 2,
      title: 'Study Group Discussion',
      host: 'Sarah Johnson',
      date: '2024-01-25',
      time: '2:00 PM',
      duration: '2 hours',
      participants: 12,
      meetingId: '987-654-321',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Zoom Integration</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowJoinModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <i className="fas fa-video mr-2"></i>
            Join Meeting
          </button>
          <button
            onClick={() => setShowScheduleModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <i className="fas fa-calendar-plus mr-2"></i>
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Scheduled Meetings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Scheduled Meetings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scheduledMeetings.map(meeting => (
            <div key={meeting.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{meeting.title}</h4>
                <span className="text-sm text-gray-500">{meeting.duration}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Host: {meeting.host}</p>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>{meeting.date}</span>
                <span>{meeting.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  <i className="fas fa-users mr-1"></i>
                  {meeting.participants} participants
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Recent Meetings</h4>
          <button className="text-blue-500 hover:text-blue-600">
            View History
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Recordings</h4>
          <button className="text-blue-500 hover:text-blue-600">
            Access Recordings
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Settings</h4>
          <button className="text-blue-500 hover:text-blue-600">
            Configure Zoom
          </button>
        </div>
      </div>

      {/* Join Meeting Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Join Meeting</h3>
                <button 
                  onClick={() => setShowJoinModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meeting ID
                  </label>
                  <input
                    type="text"
                    value={meetingId}
                    onChange={(e) => setMeetingId(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter meeting ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter meeting password"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Join Meeting
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
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

      {/* Schedule Meeting Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Schedule Meeting</h3>
                <button 
                  onClick={() => setShowScheduleModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meeting Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter meeting title"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Schedule
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowScheduleModal(false)}
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

export default ZoomIntegration;
