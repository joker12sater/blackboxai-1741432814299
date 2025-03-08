import React from 'react';

const ContentLock = ({ children, isPremium, isUserPremium }) => {
  if (!isPremium || (isPremium && isUserPremium)) {
    return children;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <div className="mb-4">
          <i className="fas fa-lock text-4xl text-gray-400"></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
        <p className="text-gray-600 mb-4">
          This content is available exclusively to premium subscribers.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Upgrade your account to access:
          </p>
          <ul className="text-left max-w-xs mx-auto space-y-2">
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Exclusive news articles
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              In-depth analysis
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Special reports
            </li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage:
const ExampleUsage = () => {
  return (
    <ContentLock isPremium={true} isUserPremium={false}>
      <div className="premium-content">
        This is premium content that will be hidden behind the paywall.
      </div>
    </ContentLock>
  );
};

export default ContentLock;
