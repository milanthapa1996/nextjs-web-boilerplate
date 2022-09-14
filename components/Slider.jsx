import React from "react";
import { Carousel } from "flowbite-react";
import Notice from "./Notice";

const Slider = () => {
  
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mt-2">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full md:w-[75%] shadow-md">
        <Carousel>
          <img
            src="https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000"
            alt="..."
          />
          <img
            src="https://img.freepik.com/free-vector/blue-technology-digital-banner-design_1017-32257.jpg?w=2000"
            alt="..."
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg"
            alt="..."
          />
        </Carousel>
      </div>
     <Notice/>
    </div>
  );
};

export default Slider;
