import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import VisualStoriesCard from './VisualStoriesCard';

export const VisualStories = () => {
  const [vs, setVs] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/news');
    setVs(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(vs);

  return (
    <div className='pl-2 flex flex-col justify-cente items-start mt-10 md:pl-7 xl:pl-24'>
      {/* <h1>VisualStories</h1> */}
      <div className='flex flex-row justify-start items-center mb-12'>
        <h2 className='font-sans font-semibold block text-black text-3xl'>
          Visual Stories
        </h2>
        <ChevronRightIcon className='text-black h-6 w-6 ml-1' />
      </div>
      <div className='w-full grid grid-flow-col auto-cols-max gap-x-10 overflow-x-scroll scrollbar-hide mb-28'>
        {vs.map((data, index, arr) => {
          return <VisualStoriesCard data={data} index={index} arr={arr} />;
        })}
      </div>
    </div>
  );
};
