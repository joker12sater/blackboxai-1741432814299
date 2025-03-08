import React, { useState } from 'react';

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);

  const surveyQuestions = {
    1: {
      type: 'multiple-choice',
      question: 'How often do you participate in cultural events?',
      options: [
        'Weekly',
        'Monthly',
        'Every few months',
        'Yearly',
        'Rarely'
      ]
    },
    2: {
      type: 'checkbox',
      question: 'Which cultural activities interest you the most? (Select all that apply)',
      options: [
        'Traditional Dance',
        'Music Performances',
        'Food Festivals',
        'Art Exhibitions',
        'Cultural Workshops'
      ]
    },
    3: {
      type: 'rating',
      question: 'How would you rate the importance of cultural preservation?',
      scale: 5
    },
    4: {
      type: 'text',
      question: 'What suggestions do you have for improving cultural engagement in our community?'
    }
  };

  const totalSteps = Object.keys(surveyQuestions).length;

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  const renderQuestion = (questionData) => {
    switch (questionData.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {questionData.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="multiple-choice"
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {questionData.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'rating':
        return (
          <div className="flex space-x-4 justify-center">
            {[...Array(questionData.scale)].map((_, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                {index + 1}
              </button>
            ))}
          </div>
        );

      case 'text':
        return (
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Type your answer here..."
          ></textarea>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {!showThankYou ? (
        <>
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Cultural Engagement Survey</h2>
              <span className="text-sm text-gray-500">
                Question {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              {surveyQuestions[currentStep].question}
            </h3>
            {renderQuestion(surveyQuestions[currentStep])}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              className={`px-6 py-2 rounded-lg transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentStep === totalSteps) {
                  handleSubmit();
                } else {
                  setCurrentStep(prev => Math.min(totalSteps, prev + 1));
                }
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {currentStep === totalSteps ? 'Submit' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        // Thank You Screen
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your responses have been recorded. Your feedback helps us improve our cultural initiatives.
          </p>
          <button
            onClick={() => {
              setCurrentStep(1);
              setShowThankYou(false);
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Take Another Survey
          </button>
        </div>
      )}

      {/* Survey Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">About this Survey</h4>
        <p className="text-gray-600 text-sm">
          This survey helps us understand community engagement with cultural activities
          and gather feedback for future improvements. Your responses are anonymous
          and will be used solely for community planning purposes.
        </p>
      </div>
    </div>
  );
};

export default SurveyForm;
