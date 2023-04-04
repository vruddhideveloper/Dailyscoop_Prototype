import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../utils/dimensions';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import GadgetCard from './GadgetCard';

const Gadget = (props) => {
  const [gadget, setGadgets] = useState([]);
  const [allGadgets, setAllGadgets] = useState([]);

  const { width, height } = useWindowDimensions();

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/gadget');

    setAllGadgets(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (width < 768) {
      setGadgets(allGadgets.slice(0, 4));
    } else if (width >= 768) {
      setGadgets(allGadgets.slice(0, 6));
    }
  }, [width, height, allGadgets]);

  console.log(gadget);

  console.log('Size: ', width, height);

  return (
    <div className='bg-white flex flex-col mt-[110px] px-2 md:bg-[#1E1E1E] md:py-16 md:mt-24 md:mb-28 md:px-7 xl:px-28 xl:pb-20 '>
      <div className='flex flex-row justify-start items-center'>
        <h2 className='font-sans font-semibold block text-black text-2xl md:text-3xl md:text-white'>
          Gadgets
        </h2>
        <ChevronRightIcon className='text-black h-5 w-5 ml-1 md:w-6 md:h-6 md:text-white' />
      </div>

      <div className='w-full grid grid-rows-4 gap-y-8 mt-16 mb-28 md:mb-0 md:grid-rows-3 md:grid-cols-2 md:gap-x-[78px] md:gap-y-[74px] xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-[74 px] xl:gap-x-[74px]'>
        {gadget.map((data, index, arr) => (
          <GadgetCard
            _id={data._id}
            price={data.price}
            name={data.name}
            img={data.img}
            key={data._id}
            index={index}
            arr={arr}
          />
        ))}
      </div>
    </div>
  );
};

export default Gadget;
