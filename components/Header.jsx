import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsBrightnessLowFill,
  BsBrightnessLow,
  BsXOctagon,
  BsFillGridFill,
} from "react-icons/bs";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Teams",
      path: "/teams",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Blog",
      path: "https://blog.dima-website.vercel.app/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <nav className="h-12 md:h-16 px-2 sm:px-4 py-8 dark:bg-gray-900 sticky w-full z-[100] top-0 left-0 shadow-sm flex justify-between items-center bg-indigo-100 opacity-90">
        <div>
          <div className="hidden md:block cursor-pointer">
            <Link href="/">
              <Image src="/logo.png" width={200} height={50} />
            </Link>
          </div>
          <div className="md:hidden block">
            <Link href="/">
              <Image src="/logo_small.png" width={50} height={40} />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center space-x-8">
            {menuList.map((item, index) =>
              item.name === "Blog" ? (
                <a
                  target="_blank"
                  href={item.path}
                  rel="noopener noreferrer"
                  key={index}
                >
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400  dark:hover:text-gray-100 text-md font-medium hover:text-primary-500">
                    {item.name}
                  </li>
                </a>
              ) : (
                <Link href={item.path} key={index}>
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400  dark:hover:text-gray-100 text-md font-medium hover:text-primary-500">
                    {item.name}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
        <div className="space-x-2 flex justify-center items-center">
          <Link href="/login">
            <span className="hidden md:inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Login
            </span>
          </Link>

          {theme === "normal" ? (
            <button
              className="rounded-lg focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 p-0.5"
              onClick={() => setTheme("dark")}
            >
              <BsBrightnessLowFill className="text-3xl" />
            </button>
          ) : (
            <button
              className="rounded-lg focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 p-0.5"
              onClick={() => setTheme("normal")}
            >
              <BsBrightnessLow className="text-3xl" />
            </button>
          )}
          <button
            className=" flex md:hidden rounded-lg focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 p-0.5"
            onClick={() => setOpen(true)}
          >
            <BsFillGridFill className="text-3xl text-gray-900" />
          </button>
        </div>
        {open && (
          <div
            className="flex md:hidden fixed top-0 left-0 bg-black/80 w-full h-screen"
            id="sidebar"
          >
            <div
              className={`bg-indigo-100 z-[200] h-screen w-full md:hidden ease-in-out duration-300 ${
                open ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="h-14 p-4 shadow-md flex justify-between items-center bg-white">
                <div>
                  <Image src="/logo_small.png" width={50} height={40} />
                </div>
                <div>
                  <button
                    className="rounded-lg focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 p-0.5"
                    onClick={() => setOpen(false)}
                  >
                    <BsXOctagon className="text-3xl text-gray-900" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <ul className="flex flex-col justify-center items-center space-y-6">
                  {menuList.map((item, index) =>
                    item.name === "Blog" ? (
                      <a
                        target="_blank"
                        href={item.path}
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <li
                          key={index}
                          onClick={() => setOpen(false)}
                          className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 text-md font-medium hover:text-primary-500"
                        >
                          {item.name}
                        </li>
                      </a>
                    ) : (
                      <Link href={item.path} key={index}>
                        <li
                          key={index}
                          onClick={() => setOpen(false)}
                          className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 text-md font-medium hover:text-primary-500"
                        >
                          {item.name}
                        </li>
                      </Link>
                    )
                  )}
                </ul>
                <div className="w-full inline-flex justify-center items-center text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                  Login
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
