import React from 'react';

const PaymentIntegration = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Integration</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Select Payment Method</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter amount" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Process Payment</button>
      </form>
    </div>
  );
};

export default PaymentIntegration;
