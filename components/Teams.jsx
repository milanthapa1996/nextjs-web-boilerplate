import React from "react";
import { BsFacebook, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";

const Teams = () => {
  return (
    <div className="bg-indigo-50 py-16 px-4">
      <section className="dark:bg-gray-900">
        <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mb-12">
              Our <span className="text-blue-600 dark:text-blue-500">TEAM</span>{" "}
            </h1>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Lorem impsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
              <p>CEO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                alt="Helene Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Helene Engels</a>
              </h3>
              <p>CTO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </h3>
              <p>SEO & Marketing</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="Joseph Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Joseph Mcfall</a>
              </h3>
              <p>Sales</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                alt="Sofia Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lana Byrd</a>
              </h3>
              <p>Web Designer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                alt="Leslie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Leslie Livingston</a>
              </h3>
              <p>Graphic Designer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Michael Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Michael Gough</a>
              </h3>
              <p>React Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                alt="Neil Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Neil Sims</a>
              </h3>
              <p>Vue.js Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <BsFacebook className="text-xl text-[#4267B2] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsTwitter className="text-xl text-[#00acee] hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsGithub className="text-xl text-gray-900 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
                <li>
                  <BsInstagram className="text-xl text-pink-600 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;