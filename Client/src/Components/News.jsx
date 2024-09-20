import React, { useEffect, useState } from 'react';
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import Return from './Return';
import Footer from './Footer';

export default function News() {
  const [newsdata, setnewsdata] = useState([]);
  const [iserror, setiserror] = useState(false);

  async function getnews() {
    try {
      const response = await fetch("http://localhost:4000");
      const Data = await response.json();
      setnewsdata(Data.data);
    } catch (e) {
      setiserror(true);
      console.log(e.message + ' Try reloading the page!');
    }
  }

  useEffect(() => {
    getnews();
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className='bg-gray-900 p-4 sticky top-0 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <FaRegNewspaper className='text-red-200 text-4xl md:text-6xl' />
          <b className='text-white text-lg md:text-xl'>
            Latest News On Cryptocurrency
          </b>
        </div>
        <Return />
      </div>

      {iserror && (
        <div className='h-[300px] flex items-center justify-center text-red-500 text-2xl'>
          No response from server .. Try reloading the page
        </div>
      )}

      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {newsdata &&
          newsdata.slice(0, 20).map((data, index) => (
            <div
              key={index}
              className='border-2 rounded-lg bg-black p-4 w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
              <div className='flex flex-col gap-2'>
                <img
                  src={data.image_url}
                  className='border-black border-2 w-full max-h-[200px] object-cover'
                  alt="news"
                />
                <div className='flex flex-col justify-between'>
                  <h1 className='text-lg md:text-xl text-yellow-200'>
                    {data.title}
                  </h1>
                  <div className='flex items-center gap-2 mt-2'>
                    <a
                      href={data.news_url}
                      className='text-blue-400 font-bold hover:text-blue-300'>
                      Read More
                    </a>
                    <IoArrowRedoSharp className='text-blue-500 hover:text-blue-300 cursor-pointer' />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer bg="bg-gray-900" color="text-white" />
    </>
  );
}
