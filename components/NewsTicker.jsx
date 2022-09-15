import React from "react";
import { Carousel } from "flowbite-react";

const NewsTicker = () => {
  return (
    <div className="h-8 md:h-12 flex">
      <div className="w-[20%] md:w-[10%] bg-indigo-100 flex justify-center items-center rounded-lg">
        <span className="text-red-500 text-sm md:text-xl font-bold p-1">
          News
        </span>
      </div>
      <div className="h-8 md:h-12 w-[80%] md:w-[90%] flex justify-center items-center rounded-none">
        <Carousel
          indicators={false}
          leftControl={<></>}
          rightControl={<></>}
          slideInterval={20}
        >
          <div className="flex h-full items-center justify-center items-center rounded-none  bg-gray-50 dark:bg-gray-700 dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="flex h-full items-center justify-center items-center rounded-none   bg-gray-50 dark:bg-gray-700 dark:text-white">
            Itaque earum quam consequuntur qui
          </div>
          <div className="flex h-full items-center justify-center items-center rounded-none   bg-gray-50 dark:bg-gray-700 dark:text-white">
            nobis beatae ut maxime optio
          </div>
          <div className="flex h-full items-center justify-center items-center rounded-none   bg-gray-50 dark:bg-gray-700 dark:text-white">
            cum tempore accusamus amet illo soluta fugiat
          </div>
          <div className="flex h-full items-center justify-center items-center rounded-none   bg-gray-50 dark:bg-gray-700 dark:text-white">
            animi eos esse, at error.
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewsTicker;
