import React from "react";
import Link from "next/link";
import { BsLinkedin, BsJoystick, BsHurricane } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <section className="bg-indigo-50 dark:bg-gray-900 mt-4">
        <div className="mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link href="/courses">
            <div className="cursor-pointer inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">
                Admission 2022 open for all courses
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            NEPAL&apos;S NO. 1 CADET PREPARATION CLASSES
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Dima Academy aims to be a nationally and internationally reputed
            learning center, recognized for academic excellence in
            teaching-learning activities in the horizon of defence /security/
            Nepal Army.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="#">
              <span className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </span>
            </Link>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              FEATURED IN
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <Link href="#">
                <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 cursor-pointer">
                  <BsLinkedin className="text-4xl md:text-6xl" />
                  <span className="text-lg font-medium">Linkedin</span>
                </span>
              </Link>
              <Link href="#">
                <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 cursor-pointer">
                  <BsJoystick className="text-4xl md:text-6xl" />
                  <span className="text-lg font-medium">Somthing</span>
                </span>
              </Link>
              <Link href="#">
                <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 cursor-pointer">
                  <BsHurricane className="text-4xl md:text-6xl" />
                  <span className="text-lg font-medium">Nothing</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
