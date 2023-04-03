import React, { useEffect, useState } from "react";
// import './reviews.css';
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import axios from "axios";
import { useWindowDimensions } from "../../utils/dimensions";

const Reviews = ({ image, title, description }) => {
  const [review, setReview] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/movie-reviews");
    setReview(response.data);
    console.log("REVIEWS: ", response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(review);

  const { width, height } = useWindowDimensions();

  console.log("Size: ", width, height);

  return (
    <div className="h-96 bg-[#1e1e1e] flex flex-col pt-8 pb-14 pl-2 md:min-h-[596px] md:pt-12 md:pl-7 xl:pl-24">
      <div className="flex flex-row justify-start items-center">
        <h2 className="font-sans font-semibold block text-white text-2xl md:text-3xl">
          Reviews
        </h2>
        <ChevronRightIcon className="text-white h-5 w-5 ml-1 md:w-6 md:h-6" />
      </div>

      <div className="w-full grid grid-flow-col auto-cols-max gap-x-6 overflow-x-scroll mt-8 scrollbar-hide md:gap-x-10">
        {review.map((data, index, arr) => (
          <div
            key={data._id}
            className={`flex flex-grow flex-col justify-between flex-nowrap p-0 ${
              index === arr.length - 1 ? "pr-2 md:pr-7 xl:pr-24" : ""
            }`}
          >
            <img
              className="w-[113px] h-[141px] rounded mb-4 bg-[#1e1e1e] overflow-hidden md:w-[246px] md:h-[308px]"
              src={data.img}
              alt={data.title}
            />
            <h3 className="font-sans font-semibold text-base text-white mb-4">
              {data.title}
            </h3>
            <div
              className={`flex flex-row items-center ${
                width >= 1280 ? "justify-start" : "justify-between"
              }`}
            >
              <p className="font-sans font-semibold text-xs text-white">
                {data.date}
              </p>
              <div
                className={`flex flex-row  items-center ${
                  width >= 1280 ? "pl-4" : ""
                }`}
              >
                {width >= 768 && (
                  <p className="font-sans font-semibold text-xs text-white mr-2">
                    Ratings:
                  </p>
                )}
                <div className="w-6 h-4 flex justify-center items-center bg-[#3FB516] rounded px-[1.5px] py-[1.5px]">
                  <p className="font-sans font-semibold text-xs text-white">
                    {data.ratings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
