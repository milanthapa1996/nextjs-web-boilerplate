import React from "react";

const Notice = () => {
  const noticeList = [
    {
      title: "Notice 1",
      description: "Notice 1 description",
    },
    {
      title: "Notice 2",
      description: "Notice 2 description",
    },
    {
      title: "Notice 3",
      description: "Notice 3 description",
    },
    {
      title: "Notice 4",
      description: "Notice 4 description",
    },
    {
      title: "Notice 5",
      description: "Notice 5 description",
    },
    {
      title: "Notice 1",
      description: "Notice 1 description",
    },
    {
      title: "Notice 2",
      description: "Notice 2 description",
    },
    {
      title: "Notice 3",
      description: "Notice 3 description",
    },
    {
      title: "Notice 4",
      description: "Notice 4 description",
    },
    {
      title: "Notice 5",
      description: "Notice 5 description",
    },
    {
      title: "Notice 1",
      description: "Notice 1 description",
    },
    {
      title: "Notice 2",
      description: "Notice 2 description",
    },
    {
      title: "Notice 3",
      description: "Notice 3 description",
    },
    {
      title: "Notice 4",
      description: "Notice 4 description",
    },
    {
      title: "Notice 5",
      description: "Notice 5 description",
    },
  ];
  return (
    <div
      id="notice-list"
      className="w-full md:w-[25%] bg-white rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-y-auto relative shadow-md shadow-gray-300"
    >
      <div
        id="title"
        className="z-20 bg-indigo-50 w-full sticky top-0 p-4 rounded-t-lg flex items-center justify-between"
      >
        <h1 className="text-lg font-medium">Notice</h1>
        <span className="text-sm underline text-blue-700 cursor-pointer">
          view all
        </span>
      </div>
      <div id="list">
        <ul
          role="list"
          class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 pt-2"
        >
          {noticeList.map((notice, index) => (
            <li key={index} className="border-b-2 pb-1 border-gray-50">
              <h1 className="text-md font-semibold cursor-pointer hover:text-blue-400 ">
                {notice.title}
              </h1>
              <p className="text-xs">{notice.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notice;
