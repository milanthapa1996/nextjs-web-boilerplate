import React from "react";
import { BsXLg } from "react-icons/bs";

const CustomModal = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 text-slate-800 z-[200] bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-indigo-50 rounded-xl h-auto w-[80%] md:w-[50%] flex flex-col p-4">
        <div className="h-[30%] bg-opacity-80 inline-flex justify-end items-start px-2">
          <div
            className="cursor-pointer rounded-md shadow-lg"
            onClick={onClose}
          >
            <BsXLg className="text-2xl p-1 text-gray-500" />
          </div>
        </div>
        <div className="bg-white h-[70%] rounded-lg p-2 mt-2">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
