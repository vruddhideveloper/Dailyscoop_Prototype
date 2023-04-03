import React from 'react';
import { useClampText } from 'use-clamp-text';

export default function VisualStoriesCard({ data, index, arr }) {
  const [ref, { clampedText }] = useClampText({
    text: data.headline,
    ellipsis: '...',
    expanded: false,
    lines: 3,
  });

  return (
    <div
      key={data._id}
      className={`flex flex-grow flex-col justify-between flex-nowrap p-0 ${
        index === arr.length - 1 ? 'pr-2 md:pr-7 xl:pr-24' : ''
      }`}>
      <div
        className={`rounded-xl w-[268px] h-[430px] relative overflow-hidden`}>
        <img
          className='rounded-xl w-full h-full object-cover z-0'
          src={data.img}
          alt='Story'
        />
        <div className='z-10 absolute bottom-3 pl-3 flex flex-row justify-start items-end flex-nowrap w-[242px] '>
          <div className='border-[1px] border-white w-0 h-[76px] mr-3'></div>
          <div className='flex flex-col justify-between items-start'>
            <div ref={ref} className='font-sans font-bold text-base text-white'>
              {clampedText}
            </div>
            <p className='font-sans font-normal text-white text-sm mt-1'>
              Entertainment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
