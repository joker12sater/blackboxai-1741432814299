import React, { useState } from 'react';

const DictionaryUI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const dictionary = [
    {
      id: 1,
      word: 'Omogusii',
      translation: 'A Kisii person',
      pronunciation: 'oh-moh-goo-see',
      audioUrl: '/audio/omogusii.mp3',
      example: 'Omogusii oyo nare omonto muya.',
      exampleTranslation: 'That Kisii person is a good person.',
      category: 'Identity'
    },
    {
      id: 2,
      word: 'Amache',
      translation: 'Water',
      pronunciation: 'ah-mah-che',
      audioUrl: '/audio/amache.mp3',
      example: 'Ninde amache aya.',
      exampleTranslation: 'Bring that water.',
      category: 'Common'
    },
    {
      id: 3,
      word: 'Egesusuro',
      translation: 'Morning',
      pronunciation: 'eh-geh-soo-soo-roh',
      audioUrl: '/audio/egesusuro.mp3',
      example: 'Egesusuro giamatuko.',
      exampleTranslation: 'Good morning.',
      category: 'Greetings'
    }
  ];

  const filteredWords = dictionary.filter(entry =>
    entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term && !recentSearches.includes(term)) {
      setRecentSearches(prev => [term, ...prev].slice(0, 5));
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Gusii Dictionary</h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for words in Ekegusii or English..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 pl-10"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => handleSearch(term)}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dictionary Results */}
      <div className="space-y-4">
        {filteredWords.map(entry => (
          <div
            key={entry.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedWord(entry)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">{entry.word}</h3>
                <p className="text-gray-600">{entry.translation}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {entry.category}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">
              Pronunciation: {entry.pronunciation}
            </p>
            <button className="text-blue-500 hover:text-blue-600">
              <i className="fas fa-volume-up mr-2"></i>
              Listen
            </button>
          </div>
        ))}
      </div>

      {/* Word Details Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-lg">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedWord.word}</h3>
                  <p className="text-gray-600">{selectedWord.translation}</p>
                </div>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Pronunciation</h4>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">{selectedWord.pronunciation}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <i className="fas fa-volume-up mr-2"></i>
                      Play Audio
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Usage</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 mb-2">{selectedWord.example}</p>
                    <p className="text-gray-600">{selectedWord.exampleTranslation}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <i className="fas fa-bookmark mr-2"></i>
                    Save Word
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <i className="fas fa-share mr-2"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Common', 'Greetings', 'Identity', 'Family', 'Numbers', 'Time', 'Food', 'Culture'].map(category => (
            <button
              key={category}
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DictionaryUI;
