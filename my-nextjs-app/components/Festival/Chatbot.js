import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your Festival Assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    { id: 1, text: 'Event Schedule' },
    { id: 2, text: 'Food Recommendations' },
    { id: 3, text: 'Directions' },
    { id: 4, text: 'Emergency Help' }
  ];

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      const botResponses = {
        'Event Schedule': 'Here\'s today\'s schedule:\n- 2 PM: Main Stage Performance\n- 4 PM: Cultural Show\n- 6 PM: Food Festival\n- 8 PM: Closing Ceremony',
        'Food Recommendations': 'I recommend trying:\n1. Traditional dishes at Stall 5\n2. Street Food Corner near Gate 2\n3. Dessert Paradise at Zone C',
        'Directions': 'You can find interactive maps at each entrance. The main stage is located at the center, and food courts are towards the east.',
        'Emergency Help': 'For emergencies, please visit the medical tent near Gate 1 or call our emergency hotline: 555-0123',
        'default': 'I\'m here to help! You can ask me about event schedules, food recommendations, directions, or emergency assistance.'
      };

      const response = botResponses[userMessage] || botResponses.default;

      setMessages(prev => [...prev, {
        id: prev.length + 2,
        type: 'bot',
        content: response,
        timestamp: new Date().toLocaleTimeString()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    }]);

    setInputMessage('');
    simulateBotResponse(message);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Festival Assistant</h2>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Online
        </span>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 rounded-lg">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border'
              }`}
            >
              {message.type === 'bot' && (
                <div className="flex items-center mb-2">
                  <i className="fas fa-robot mr-2"></i>
                  <span className="font-semibold">Festival Bot</span>
                </div>
              )}
              <p className="whitespace-pre-line">{message.content}</p>
              <span className={`text-xs ${
                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              } block mt-2`}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Responses */}
      <div className="mb-4 flex flex-wrap gap-2">
        {quickResponses.map(response => (
          <button
            key={response.id}
            onClick={() => handleSendMessage(response.text)}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors"
          >
            {response.text}
          </button>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => handleSendMessage(inputMessage)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>

      {/* Features Hint */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>You can ask me about schedules, food, directions, and more!</p>
      </div>
    </div>
  );
};

export default Chatbot;
