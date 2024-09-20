import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
export default function HalfPage({data}) {
const [coin,setcoin]=useState([{
  name:"Dogecoin",
  image:'dogecoin.png',
  symbol:'doge'
},
{
  name:"Ethereum",
  image:'ethereum.png',
  symbol:'eth'
},{
  name:"USDC",
  image:'usdc.png',
  symbol:'usdc'
},
{
  name:"Solana",
  image:'coin.png',
  symbol:'sol'
},
{
  name:"Bitcoin",
  image:'bitcoin.png',
  symbol:'btc'
},
{
  name:"Tether",
  image:'tether.png',
  symbol:'usdt'
},
{
  name:"Cardano",
  image:'cardano.png',
  symbol:'ada'
},


]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };


  return (
    <div className="p-4 py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white">The Future of Finance is Here. Be Part of it with Crypto.</h2>
      <br />
      <h5 className="text-yellow-400 font-bold">Get All The Info Regarding Your Favorite Crypto Currency</h5>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        className="flex justify-between " 
      >
        {coin.slice(0,8).map((coin,index) => (
          <div key={index} className="text-white mt-[20%] flex-col justify-center hover:cursor-grab">
            <img src={coin.image} alt={coin.name} className="w-[100px] m-auto" />
            <p className="text-xl text-center text-gray-300">{coin.name}</p>
            <p className="text-xl text-center text-gray-400">{coin.symbol.toUpperCase()}</p>

          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
