import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import SubscribeForm from "./SubscribeForm";

const BlogBanner = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-200 to-primary-400 rounded-xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Want to learn more?</span>
            <span className="block text-primary-600">Check out our blog.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://blogs.dimaacademy.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Read our blog
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
