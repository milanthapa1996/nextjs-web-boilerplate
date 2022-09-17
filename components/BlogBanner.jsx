import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import CustomModal from "./CustomModal";

const BlogBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
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
            <div
              className="ml-3 inline-flex rounded-md shadow"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-indigo-100 hover:bg-indigo-200">
                Subscribe
                <BsFillBellFill className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <CustomModal onClose={handleClose} visible={showModal}>
        <div className="space-y-4">
          <h2 className="text-lg antialiased md:text-3xl font-bold text-center">
            Sign up for our newsletter
          </h2>
          <div>
            <p className="text-xs md:text-sm text-center px-2 md:px-4 font-light antialiased text-slate-500">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </div>
          <div>
            <form>
              <div className="space-y-2 px-6">
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Email"
                  autocomplete="off"
                />
                <button className="py-3 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Subscribe
                </button>
              </div>
              <div className="text-center text-sm font-medium text-gray-500 mt-2">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default BlogBanner;
