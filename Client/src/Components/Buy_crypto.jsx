import React from 'react';

export default function Buy_crypto() {
  return (
    <div className='flex flex-wrap justify-evenly mt-3 space-x-4'>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg'>
        <h1 className='text-xl font-bold mb-2'>Buy crypto</h1>
        <p className='text-sm'>Buy BTC, ETH, and other crypto easily via bank transfer.</p>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg'>
        <h1 className='text-xl font-bold mb-2'>Recurring Buy</h1>
        <p className='text-sm'>Grow your portfolio automatically with daily, weekly, or monthly trades.</p>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg w-80 shadow-lg'>
        <h1 className='text-xl font-bold mb-2'>Price Alerts</h1>
        <p className='text-sm'>Be notified on BTC, ETH, XRP prices, and more.</p>
      </div>
    </div>
  );
}
