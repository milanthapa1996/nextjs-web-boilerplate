import React from "react";
import { Carousel } from "flowbite-react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Directors = () => {
  return (
    <div className="bg-indigo-50 py-16 px-4">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mb-12">
        Meet our <span class="text-blue-600 dark:text-blue-500">Directors</span>{" "}
      </h1>
      <div className="h-72 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          indicators={true}
          leftControl={
            <BsArrowLeftCircle className="text-3xl md:text-4xl hover:text-primary-400 opacity-0 hover:opacity-100" />
          }
          rightControl={
            <BsArrowRightCircle className="text-3xl md:text-4xl hover:text-primary-400 opacity-0 hover:opacity-100" />
          }
        >
          <div className="flex flex-col-reverse md:flex-row-reverse h-full bg-gray-50 dark:bg-gray-700 dark:text-white w-full">
            <div className="w-full md:w-[50%] h-[50%] md:h-full bg-indigo-50">
              <figure className="max-w-screen-md p-4">
                <blockquote>
                  <p
                    className="first-line:tracking-widest
  first-letter:text-5xl first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
                  >
                    &quot;DIMA is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application.
                    Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS
                    application.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://media.istockphoto.com/photos/face-close-up-muted-colors-low-key-portrait-black-hair-picture-id490634084?b=1&k=20&m=490634084&s=612x612&w=0&h=ZL8e7T16iyKxK23PhZV8KCaCmKaOfzILMwnnn_Zh51w="
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                      Ronisha Sigdel
                    </cite>
                    <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CTO at Flowbite
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="w-full md:w-[50%] h-[50%] md:h-full">
              <img
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/photos/face-close-up-muted-colors-low-key-portrait-black-hair-picture-id490634084?b=1&k=20&m=490634084&s=612x612&w=0&h=ZL8e7T16iyKxK23PhZV8KCaCmKaOfzILMwnnn_Zh51w="
                alt="profile picture"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse h-full bg-gray-50 dark:bg-gray-700 dark:text-white w-full">
            <div className="w-full md:w-[50%] h-[50%] md:h-full bg-indigo-50">
              <figure className="max-w-screen-md p-4">
                <blockquote>
                  <p
                    className="first-line:tracking-widest
  first-letter:text-5xl first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
                  >
                    &quot;DIMA is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application.
                    Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS
                    application.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-picture-id1212960962?k=20&m=1212960962&s=612x612&w=0&h=o2PGY4yhn51XSnYi60dMCQqvXQ0d-odkaKUVocbYYLk="
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                      Milan Thapa
                    </cite>
                    <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CTO at Flowbite
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="w-full md:w-[50%] h-[50%] md:h-full">
              <img
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-picture-id1212960962?k=20&m=1212960962&s=612x612&w=0&h=o2PGY4yhn51XSnYi60dMCQqvXQ0d-odkaKUVocbYYLk="
                alt="profile picture"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Directors;
