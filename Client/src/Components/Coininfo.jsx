import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Loader from './Loader';
import Footer from './Footer';
import { Tab } from '@headlessui/react';

Chart.register(...registerables);

const CoinInfo = () => {
  const location = useLocation();
  const { crypto } = location.state || {};
  const [info, setInfo] = useState(null);
  const [days, setDays] = useState(1);
  const [chart, setChart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartLoading, setChartLoading] = useState(false);

  // Fetching the coin's info from the API
  const getInfo = useCallback(async () => {
    if (!crypto) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto.id}`);
      setInfo(response.data);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [crypto]);

  // Fetching chart data for the selected number of days
  const getChartData = useCallback(async () => {
    if (!crypto) return;
    setChartLoading(true);
    try {
      const chartData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=inr&days=${days}`
      );
      setChart(chartData.data.prices);
    } catch (e) {
      console.error(e.message);
      alert('Too many selections made in  short time, please wait a minute and try reloading again  ')
    } finally {
      setChartLoading(false);
    }
  }, [crypto, days]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  const tabDays = {
    "1D": 1,
    "7D": 7,
    "1M": 30,
    "6M": 180,
    "1Y": 365,
  };

  if (!crypto) {
    return <p className='text-white'>No coin data available</p>;
  }

  return (
    <>
      <Navbar />
      {loading ? (
        <div className='flex flex-col items-center justify-center h-[90vh]'>
          <Loader />
          <h1 className='text-center text-white text-3xl'>Loading...</h1>
        </div>
      ) : (
        info && (
          <div className='flex flex-wrap bg-gray-900 p-4 gap-4 items-start justify-between min-h-[90vh]'>
            {/* Coin Information Section */}
            <div className='flex flex-col gap-4 p-4 bg-gray-800 text-white rounded-md w-full md:w-[30%]'>
              <img
                src={info.image.large}
                alt={info.name}
                className='rounded-lg w-full h-auto'
              />
              <div className='flex items-center justify-between'>
                <h1 className='text-3xl'>{info.name}</h1>
                <a
                  href={info.links.homepage[0]}
                  className='px-4 py-2 text-white font-bold bg-green-500 rounded-lg hover:bg-green-600'
                >
                  Trade
                </a>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-lg'>
                  Market Cap Rank: <span className='text-blue-500'>{info.market_cap_rank}</span>
                </p>
                <p className='text-lg'>
                  Total Supply: <span className='text-green-500'>{info.market_data.total_supply || 'N/A'}</span>
                </p>
              </div>
              <a
                href={info.links.whitepaper}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 text-center text-white bg-violet-500 rounded-lg hover:bg-violet-600'
              >
                Click to see WhitePaper
              </a>
            </div>

            {/* Chart Section */}
            <div className='flex flex-col gap-4 p-4 bg-gray-800 text-white rounded-md w-full md:w-[65%]'>
              {/* Tab for selecting days */}
              <Tab.Group>
                <Tab.List className='flex space-x-1 rounded-xl bg-gray-700 p-1'>
                  {Object.keys(tabDays).map((key) => (
                    <Tab
                      key={key}
                      className={({ selected }) =>
                        selected
                          ? 'w-full py-2 text-sm font-medium text-white rounded-lg bg-gray-600'
                          : 'w-full py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white'
                      }
                      onClick={() => setDays(tabDays[key])}
                    >
                      {key}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>

              {/* Chart Data */}
              {chartLoading ? (
                <div className='flex justify-center items-center h-full'>
                  <Loader />
                </div>
              ) : (
                chart && (
                  <Line
                    data={{
                      labels: chart.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                          date.getHours() > 12
                            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                      }),
                      datasets: [
                        {
                          data: chart.map((coin) => coin[1]),
                          label: `Price ( Past ${days} Days ) in INR`,
                          borderColor: '#EEBC1D',
                        },
                      ],
                    }}
                    options={{
                      elements: { point: { radius: 1 } },
                      plugins: {
                        legend: { labels: { color: '#FFFFFF' } },
                      },
                      scales: {
                        x: { ticks: { color: '#FFFFFF' } },
                        y: { ticks: { color: '#FFFFFF' } },
                      },
                    }}
                  />
                )
              )}
            </div>
          </div>
        )
      )}
      <Footer bg='bg-gray-900' color='text-blue-100' />
    </>
  );
};

export default CoinInfo;
