import React from "react";
import { Carousel } from "flowbite-react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const NewsTicker = () => {
  return (
    <div className="h-8 md:h-10 flex">
      <div className="w-[20%] md:w-[10%] bg-indigo-100 flex justify-center items-center rounded-lg">
        <span className="text-red-500 text-sm md:text-xl font-bold p-1">
          News
        </span>
      </div>
      <div className="h-8 md:h-10 w-[80%] md:w-[90%] flex justify-center items-center rounded-none">
        <Carousel
          indicators={false}
          leftControl={
            <BsArrowBarLeft className="text-sm md:text-4xl text-indigo-100 hover:text-primary-400" />
          }
          rightControl={
            <BsArrowBarRight className="text-sm md:text-4xl text-indigo-100 hover:text-primary-400" />
          }
          slideInterval={1000}
        >
          <div className="flex h-full items-center justify-center items-center rounded-none   dark:bg-gray-700 dark:text-white text-xs md:text-lg">
            <span className="w-[70%] truncate text-gray-500 hover:text-blue-400">
              <a href="/blog/lorem-ipsum">lorem ipsum</a>
            </span>
          </div>
          <div className="flex h-full items-center justify-center items-center rounded-none    dark:bg-gray-700 dark:text-white text-xs md:text-lg truncate">
            <span className="w-[70%] truncate text-gray-500 hover:text-blue-400">
              <a href="/blog/lorem-ipsum">
                lorem Itaque earum quam consequuntur quijasdfk ajsdfkja ashdhfkj
                ajsfh quijasdfk ajsdfkja ashdhfkj ajsfh Itaque earum quam
                consequuntur quijasdfk ajsdfkja ashdhfkj ajsfh quijasdfk
                ajsdfkja ashdhfkj ajsfh
              </a>
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewsTicker;
