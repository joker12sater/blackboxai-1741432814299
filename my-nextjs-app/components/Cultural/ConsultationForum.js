import React, { useState } from 'react';

const ConsultationForum = () => {
  const [activeTab, setActiveTab] = useState('questions');
  const [showAskModal, setShowAskModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      title: 'Traditional Marriage Customs',
      author: 'James Mokua',
      content: 'What are the traditional steps involved in Gusii marriage ceremonies?',
      expert: 'Elder Mogaka',
      status: 'answered',
      date: '2024-01-20',
      answers: 3,
      views: 156
    },
    {
      id: 2,
      title: 'Cultural Naming Practices',
      author: 'Sarah Kemunto',
      content: 'How are traditional names chosen for newborns in Gusii culture?',
      expert: 'Elder Nyambane',
      status: 'pending',
      date: '2024-01-22',
      answers: 0,
      views: 89
    }
  ];

  const experts = [
    {
      id: 1,
      name: 'Elder Mogaka',
      expertise: ['Marriage Customs', 'Cultural Rituals'],
      experience: '40+ years',
      rating: 4.8,
      consultations: 234
    },
    {
      id: 2,
      name: 'Elder Nyambane',
      expertise: ['Traditional Medicine', 'Naming Ceremonies'],
      experience: '35+ years',
      rating: 4.9,
      consultations: 189
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Cultural Consultation Forum</h2>
        <button
          onClick={() => setShowAskModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-question-circle mr-2"></i>
          Ask Question
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'questions'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-question mr-2"></i>
          Questions
        </button>
        <button
          onClick={() => setActiveTab('experts')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'experts'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <i className="fas fa-user-tie mr-2"></i>
          Cultural Experts
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'questions' ? (
        <div className="space-y-4">
          {questions.map(question => (
            <div
              key={question.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedQuestion(question)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{question.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  question.status === 'answered'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {question.status.charAt(0).toUpperCase() + question.status.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{question.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex space-x-4">
                  <span>
                    <i className="fas fa-user mr-1"></i>
                    {question.author}
                  </span>
                  <span>
                    <i className="fas fa-calendar mr-1"></i>
                    {question.date}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <span>
                    <i className="fas fa-comment mr-1"></i>
                    {question.answers} answers
                  </span>
                  <span>
                    <i className="fas fa-eye mr-1"></i>
                    {question.views} views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experts.map(expert => (
            <div key={expert.id} className="border rounded-lg p-4">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 rounded-full p-4 mr-4">
                  <i className="fas fa-user-tie text-2xl text-gray-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{expert.name}</h3>
                  <p className="text-gray-600">{expert.experience} experience</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex space-x-4">
                  <span>
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    {expert.rating}
                  </span>
                  <span>
                    <i className="fas fa-comments mr-1"></i>
                    {expert.consultations} consultations
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ask Question Modal */}
      {showAskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Ask a Question</h3>
                <button 
                  onClick={() => setShowAskModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your question title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Question Details
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    placeholder="Describe your question in detail"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Marriage Customs</option>
                    <option>Naming Ceremonies</option>
                    <option>Cultural Rituals</option>
                    <option>Traditional Medicine</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Submit Question
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAskModal(false)}
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

export default ConsultationForum;
