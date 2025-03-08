import React from 'react';

const BusinessListings = () => {
  const businesses = [
    { id: 1, name: 'Business One', category: 'Retail' },
    { id: 2, name: 'Business Two', category: 'Food' },
    { id: 3, name: 'Business Three', category: 'Services' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Business Listings</h2>
      <ul className="space-y-4">
        {businesses.map((business) => (
          <li key={business.id} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{business.name}</h3>
            <p className="text-gray-600">Category: {business.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessListings;
