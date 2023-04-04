import React from 'react';
import { useClampText } from 'use-clamp-text/lib';
// grid-cols-[54px_minmax(261px, 1fr)]
export default function GadgetCard({ _id, img, name, price, index, arr }) {
  const [ref, { clampedText }] = useClampText({
    text: name,
    ellipsis: '...',
    expanded: false,
    lines: 2,
  });
  return (
    <div
      key={_id}
      className='grid grid-cols-[minmax(104px,_0.25fr)_minmax(261px,_0.75fr)] grid-rows-1 gap-x-8 gap-y-8 place-items-center sm:auto-cols-auto '>
      <img className='col-span-1' src={`${img}`} alt='Gadget' />
      <div className='col-span-1 flex flex-col justify-between items-start w-full h-full place-self-start'>
        <div className='flex flex-col justify-between items-start'>
          <p
            ref={ref}
            className='font-sans font-semibold text-lg text-black md:text-white'>
            {clampedText}
          </p>
          <p className='font-sans font-semibold text-sm text-black mt-2 md:text-[#FFBABA]'>
            ₹ {price}
          </p>
        </div>
        <p className='font-sans font-semibold text-sm mt-2 underline text-[#D82122] md:text-[#FFBABA]'>
          See Full Specs
        </p>
      </div>
    </div>
  );
}
