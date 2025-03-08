import React, { useState } from 'react';

const PrivateChat = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);

  const contacts = [
    {
      id: 1,
      name: 'Alice Johnson',
      status: 'online',
      avatar: '👩',
      lastMessage: 'Can you share the notes from today\'s lecture?',
      timestamp: '5 min ago',
      unread: 2
    },
    {
      id: 2,
      name: 'Bob Smith',
      status: 'offline',
      avatar: '👨',
      lastMessage: 'Thanks for the help!',
      timestamp: '2 hours ago',
      unread: 0
    },
    {
      id: 3,
      name: 'Carol Williams',
      status: 'online',
      avatar: '👩',
      lastMessage: 'See you at the library',
      timestamp: '1 hour ago',
      unread: 1
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Alice Johnson',
      content: 'Hi! Can you share the notes from today\'s lecture?',
      timestamp: '10:30 AM',
      type: 'received'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Sure! I\'ll send them right away.',
      timestamp: '10:31 AM',
      type: 'sent'
    },
    {
      id: 3,
      sender: 'Alice Johnson',
      content: 'Thank you so much! 🙏',
      timestamp: '10:32 AM',
      type: 'received'
    }
  ];

  const handleStartVideoCall = () => {
    setIsVideoCallActive(true);
  };

  const handleEndVideoCall = () => {
    setIsVideoCallActive(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-400px)]">
            {contacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full p-4 text-left border-b hover:bg-gray-50 transition-colors ${
                  selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <span className="text-2xl mr-3">{contact.avatar}</span>
                    <span className={`absolute bottom-0 right-2 w-3 h-3 rounded-full ${
                      contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 border rounded-lg overflow-hidden">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{selectedContact.avatar}</span>
                    <div>
                      <h3 className="font-semibold">{selectedContact.name}</h3>
                      <p className="text-sm text-gray-600">{selectedContact.status}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleStartVideoCall}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <i className="fas fa-video"></i>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-[calc(100vh-500px)] overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.type === 'sent'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className={`text-xs ${
                        msg.type === 'sent' ? 'text-blue-100' : 'text-gray-500'
                      } block mt-1`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-gray-700 px-2">
                    <i className="fas fa-paperclip"></i>
                  </button>
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
                <p>Select a contact to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Call Modal */}
      {isVideoCallActive && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-4 rounded-lg w-full max-w-4xl">
            <div className="relative aspect-video bg-black rounded-lg mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">{selectedContact.avatar}</span>
              </div>
              <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg">
                <div className="h-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-600 text-white p-4 rounded-full hover:bg-gray-700">
                <i className="fas fa-microphone"></i>
              </button>
              <button className="bg-gray-600 text-white p-4 rounded-full hover:bg-gray-700">
                <i className="fas fa-video"></i>
              </button>
              <button
                onClick={handleEndVideoCall}
                className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600"
              >
                <i className="fas fa-phone-slash"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateChat;
