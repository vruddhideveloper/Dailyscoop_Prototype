import React from 'react';

export default function StocksCard({
  _id,
  market,
  stockName,
  rate,
  index,
  arr,
}) {
  return (
    <div
      key={_id}
      className='w-full h-14 rounded-[10px] pr-4 row-span-1 col-span-1 bg-white flex flex-row justify-between items-center md:h-16 md:row-span-1 md:col-span-1'>
      <div className='flex flex-row justify-start items-center h-full '>
        <div className='w-[70px] h-full rounded-[10px] bg-[#E0E0E0] px-5 py-2 mr-3 flex flex-row justify-center items-center md:w-[75px]'>
          <img
            className='w-[34] h-[34] object-fill rounded-full md:w-[40px] md:h-[40px]'
            src='https://picsum.photos/36/36'
            alt='Stock Logo'
          />
        </div>
        <div className='flex flex-col justify-center items-start'>
          <p className='font-sans font-semibold text-black text-base'>
            {stockName}
          </p>
          <p className='font-sans font-semibold text-black text-sm text-opacity-50'>
            {market}
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-end justify-self-end'>
        <p className='font-sans font-semibold text-black text-sm md:text-base'>
          ₹ {rate}
        </p>
        {/* <p className='font-sans font-semibold text-[#3FB516] text-base'>
          +0.969%
        </p> */}
      </div>
    </div>
  );
}
