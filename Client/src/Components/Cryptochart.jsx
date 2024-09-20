import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Faqs from './Faqs';
import { useNavigate } from 'react-router-dom';

export default function Cryptochart() {
  const [data, setData] = useState(() => {
    // Retrieve cached data from localStorage if it exists
    const cachedData = localStorage.getItem('cryptoData');
    return cachedData ? JSON.parse(cachedData) : [];
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to fetch cryptocurrency data
  const fetchCryptoData = async () => {
    setIsLoading(true); // Show loading state during API call
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'inr',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );
      setData(response.data);
      localStorage.setItem('cryptoData', JSON.stringify(response.data)); // Cache data in localStorage
      setIsLoading(false); // Remove loading state after successful call
    } catch (e) {
      setError(e.message + ' ,try reloading the page');
      setIsLoading(false); // Remove loading state after error
    }
  };

  // useEffect to load data on the first render only if not cached
  useEffect(() => {
    if (!data.length) {
      fetchCryptoData(); // Only call API if no cached data exists
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Format number utility function
  const formatNumber = (number) => {
    return number.toLocaleString('en-IN');
  };

  // Handle row click to navigate to coin details page
  const handleRowClick = (crypto) => {
    navigate('/coininfo', { state: { crypto } });
  };

  return (
    <>
      <div className="overflow-x-auto mt-5">
        {isLoading ? (
          <div className="text-center text-yellow-400 text-2xl">Loading...</div>
        ) : error ? (
          <div
            style={{
              color: 'red',
              fontSize: '24px',
              textAlign: 'center',
              padding: '20px',
              border: '2px solid red',
              borderRadius: '10px',
              backgroundColor: '#ffe6e6',
            }}
          >
            {error}
          </div>
        ) : (
          <table className="text-white bg-black w-full">
            <thead>
              <tr className="bg-yellow-400 text-xl text-left text-black font-semibold rounded-md border-2">
                <th className="p-2">Name</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.slice(0, 10).map((crypto, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer border-2 border-gray-600 border-t-0 border-r-0 border-l-0 hover:text-gray-300 hover:bg-gray-900"
                    onClick={() => handleRowClick(crypto)}
                  >
                    <td className="py-3 text-2xl font-semibold">
                      <div className="flex items-center gap-1">
                        <img src={crypto.image} alt="symbol" className="w-[55px]" />
                        {crypto.name}
                      </div>
                    </td>
                    <td className="py-3 text-2xl">Rs.{formatNumber(crypto.current_price)}</td>
                    <td
                      className={
                        crypto.price_change_percentage_24h < 0
                          ? 'text-red-400 py-3 text-lg'
                          : 'text-green-400 py-3 text-lg'
                      }
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td
                      className={
                        crypto.market_cap_change_percentage_24h < 0
                          ? 'text-red-400 py-3 text-lg'
                          : 'text-green-400 py-3 text-lg'
                      }
                    >
                      {crypto.market_cap_change_percentage_24h.toFixed(2)}%
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

      <Faqs />
    </>
  );
}
