import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useWindowDimensions } from '../../utils/dimensions';
import StocksCard from './StocksCard';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [allStocks, setAllStocks] = useState([]);

  const { width, height } = useWindowDimensions();

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/stocks');

    setAllStocks(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (width < 768) {
      setStocks(allStocks.slice(0, 4));
    } else if (width >= 768) {
      setStocks(allStocks.slice(0, 6));
    }
  }, [width, height, allStocks]);

  console.log(stocks);

  console.log('Size: ', width, height);

  return (
    <div className='h-96 bg-[#1e1e1e] flex flex-col py-5 px-2 md:p-7 md:h-auto xl:px-28'>
      <div className='flex flex-row justify-between items-start'>
        <div className='flex flex-col justify-between items-start'>
          <h2 className='font-sans font-semibold block text-white text-lg md:text-2xl'>
            MARKET SNAPSHOT
          </h2>
          <p className='font-sans font-semibold block text-white text-xs md:text-sm'>
            11:28 PM
          </p>
        </div>
        <p className='font-sans font-semibold block text-white text-base md:text-xl underline-offset-2 underline focus:text-opacity-75'>
          See All
        </p>
      </div>

      <div className='w-full grid grid-rows-4 gap-y-3 my-9 md:grid-rows-3 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-9 xl:gap-x-8'>
        {stocks.map((data, index, arr) => (
          <StocksCard
            _id={data._id}
            market={data.market}
            rate={data.rate}
            stockName={data.stockName}
            key={data._id}
            index={index}
            arr={arr}
          />
        ))}
      </div>
    </div>
  );
};

export default Stocks;
