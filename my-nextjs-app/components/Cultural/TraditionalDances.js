import React, { useState } from 'react';

const TraditionalDances = () => {
  const [selectedDance, setSelectedDance] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const dances = [
    {
      id: 1,
      name: 'Chinchini',
      description: 'A celebratory dance performed during harvest festivals',
      category: 'Celebration',
      duration: '5:30',
      instructor: 'Mary Nyaboke',
      difficulty: 'Intermediate',
      views: 1234,
      thumbnail: '💃',
      steps: [
        'Start with basic foot movement',
        'Add shoulder movements',
        'Incorporate hip sways',
        'Complete the full body coordination'
      ]
    },
    {
      id: 2,
      name: 'Omogusii Dance',
      description: 'Traditional dance showcasing Gusii cultural identity',
      category: 'Cultural',
      duration: '4:45',
      instructor: 'John Mogaka',
      difficulty: 'Beginner',
      views: 2156,
      thumbnail: '🕺',
      steps: [
        'Learn the basic stance',
        'Practice rhythmic stepping',
        'Add arm movements',
        'Master the traditional gestures'
      ]
    },
    {
      id: 3,
      name: 'Wedding Dance',
      description: 'Special dance performed during traditional weddings',
      category: 'Ceremony',
      duration: '6:15',
      instructor: 'Sarah Kemunto',
      difficulty: 'Advanced',
      views: 1789,
      thumbnail: '👰',
      steps: [
        'Start with entrance movements',
        'Learn celebration sequences',
        'Practice partner coordination',
        'Master ceremonial gestures'
      ]
    }
  ];

  const categories = ['all', 'Celebration', 'Cultural', 'Ceremony'];

  const filteredDances = activeFilter === 'all'
    ? dances
    : dances.filter(dance => dance.category === activeFilter);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Traditional Dances</h2>

      {/* Category Filters */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Dance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDances.map(dance => (
          <div
            key={dance.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedDance(dance)}
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-100 flex items-center justify-center text-6xl">
              {dance.thumbnail}
            </div>

            {/* Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{dance.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {dance.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{dance.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  <i className="fas fa-clock mr-1"></i>
                  {dance.duration}
                </span>
                <span>
                  <i className="fas fa-signal mr-1"></i>
                  {dance.difficulty}
                </span>
                <span>
                  <i className="fas fa-eye mr-1"></i>
                  {dance.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dance Tutorial Modal */}
      {selectedDance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedDance.name}</h3>
                  <p className="text-gray-600">{selectedDance.description}</p>
                </div>
                <button
                  onClick={() => setSelectedDance(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-8xl">{selectedDance.thumbnail}</div>
              </div>

              {/* Dance Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Dance Steps</h4>
                  <ol className="space-y-2">
                    {selectedDance.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Details</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Instructor:</span> {selectedDance.instructor}
                    </p>
                    <p>
                      <span className="font-medium">Duration:</span> {selectedDance.duration}
                    </p>
                    <p>
                      <span className="font-medium">Difficulty:</span> {selectedDance.difficulty}
                    </p>
                    <p>
                      <span className="font-medium">Views:</span> {selectedDance.views}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 mt-6">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <i className="fas fa-bookmark mr-2"></i>
                  Save
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <i className="fas fa-play mr-2"></i>
                  Start Tutorial
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Tips */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Learning Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <i className="fas fa-music text-blue-500 text-xl mb-2"></i>
            <h4 className="font-semibold mb-1">Listen to the Rhythm</h4>
            <p className="text-sm text-gray-600">Feel the beat before starting the movements</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <i className="fas fa-shoe-prints text-green-500 text-xl mb-2"></i>
            <h4 className="font-semibold mb-1">Master Basic Steps</h4>
            <p className="text-sm text-gray-600">Practice fundamental movements thoroughly</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <i className="fas fa-users text-purple-500 text-xl mb-2"></i>
            <h4 className="font-semibold mb-1">Practice with Others</h4>
            <p className="text-sm text-gray-600">Join group sessions for better learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalDances;
