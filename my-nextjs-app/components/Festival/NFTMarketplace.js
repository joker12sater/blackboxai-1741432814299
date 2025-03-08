import React, { useState } from 'react';

const NFTMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'passes', name: 'Festival Passes' },
    { id: 'collectibles', name: 'Digital Collectibles' },
    { id: 'art', name: 'Digital Art' },
  ];

  const nfts = [
    {
      id: 1,
      name: 'VIP Festival Pass 2024',
      description: 'Exclusive access to all festival areas and special events',
      price: '0.5 ETH',
      image: '🎫',
      category: 'passes',
      available: 50
    },
    {
      id: 2,
      name: 'Festival Moments #1',
      description: 'Commemorative digital collection of festival highlights',
      price: '0.2 ETH',
      image: '🎭',
      category: 'collectibles',
      available: 100
    },
    {
      id: 3,
      name: 'Cultural Heritage Art',
      description: 'Digital artwork featuring traditional cultural elements',
      price: '0.3 ETH',
      image: '🎨',
      category: 'art',
      available: 75
    },
  ];

  const handlePurchase = (nft) => {
    setSelectedNFT(nft);
    setShowPurchaseModal(true);
  };

  const filteredNFTs = activeCategory === 'all' 
    ? nfts 
    : nfts.filter(nft => nft.category === activeCategory);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">NFT Marketplace</h2>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
          <i className="fas fa-wallet mr-2"></i>
          Connect Wallet
        </button>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category.id
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNFTs.map(nft => (
          <div key={nft.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            {/* NFT Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
              {nft.image}
            </div>

            {/* NFT Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{nft.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-purple-600">{nft.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-semibold">{nft.available}</p>
                </div>
              </div>

              <button
                onClick={() => handlePurchase(nft)}
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Purchase NFT
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && selectedNFT && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Purchase NFT</h3>
                <button 
                  onClick={() => setShowPurchaseModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedNFT.image}</div>
                <h4 className="text-lg font-semibold">{selectedNFT.name}</h4>
                <p className="text-gray-600">{selectedNFT.description}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>Price:</span>
                  <span className="font-semibold">{selectedNFT.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Gas Fee:</span>
                  <span className="font-semibold">0.001 ETH</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between">
                  <span>Total:</span>
                  <span className="font-semibold text-purple-600">
                    {parseFloat(selectedNFT.price.split(' ')[0]) + 0.001} ETH
                  </span>
                </div>
              </div>

              <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors mb-2">
                Confirm Purchase
              </button>
              <button 
                onClick={() => setShowPurchaseModal(false)}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Market Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-purple-600 font-semibold mb-1">Total Volume</h4>
          <p className="text-2xl font-bold">150 ETH</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-purple-600 font-semibold mb-1">Floor Price</h4>
          <p className="text-2xl font-bold">0.2 ETH</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-purple-600 font-semibold mb-1">Items Listed</h4>
          <p className="text-2xl font-bold">225</p>
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplace;
