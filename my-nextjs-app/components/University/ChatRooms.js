import React, { useState } from 'react';

const ChatRooms = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const [message, setMessage] = useState('');
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);

  const chatRooms = [
    {
      id: 1,
      name: 'General Discussion',
      description: 'Open chat for all university students',
      participants: 156,
      lastActive: '2 min ago',
      category: 'general'
    },
    {
      id: 2,
      name: 'Academic Support',
      description: 'Get help with your studies',
      participants: 89,
      lastActive: '5 min ago',
      category: 'academic'
    },
    {
      id: 3,
      name: 'Campus Events',
      description: 'Discuss upcoming university events',
      participants: 234,
      lastActive: 'Just now',
      category: 'events'
    }
  ];

  const messages = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Has anyone attended the morning lecture?',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Yes, it was about advanced algorithms',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      content: 'The slides are already uploaded to the portal',
      timestamp: '10:35 AM'
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Chat Rooms</h2>
        <button
          onClick={() => setShowCreateRoomModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          Create Room
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Rooms List */}
        <div className="lg:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <input
              type="text"
              placeholder="Search chat rooms..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-400px)]">
            {chatRooms.map(room => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={`w-full p-4 text-left border-b hover:bg-gray-50 transition-colors ${
                  activeRoom?.id === room.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{room.name}</h3>
                  <span className="text-xs text-gray-500">{room.lastActive}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <i className="fas fa-users mr-1"></i>
                  {room.participants} participants
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 border rounded-lg overflow-hidden">
          {activeRoom ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{activeRoom.name}</h3>
                    <p className="text-sm text-gray-600">{activeRoom.participants} participants</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[calc(100vh-500px)] overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className="flex flex-col">
                    <div className="flex items-center mb-1">
                      <span className="font-semibold mr-2">{msg.user}</span>
                      <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    </div>
                    <p className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <i className="fas fa-comments text-4xl mb-2"></i>
                <p>Select a chat room to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Room Modal */}
      {showCreateRoomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Create New Chat Room</h3>
                <button 
                  onClick={() => setShowCreateRoomModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter room name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter room description"
                    rows="3"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="general">General</option>
                    <option value="academic">Academic</option>
                    <option value="events">Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Create Room
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateRoomModal(false)}
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

export default ChatRooms;
