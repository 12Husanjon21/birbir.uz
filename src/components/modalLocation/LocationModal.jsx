import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const LocationModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const regions = [
    "Toshkent",
    "Toshkent viloyati",
    "Andijon viloyati",
    "Buxoro viloyati",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg w-[450px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shahar yoki hududni tanlang</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Barcha hududlar"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BD007D]"
          />
          <FaLocationArrow className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center gap-x-2 mb-6 cursor-pointer">
          <div className="flex items-center justify-center bg-[#F5F6F7] rounded-full w-8 h-8 text-[#BD007D]">
            <FaLocationArrow size={18} />
          </div>
          <p className="text-sm text-[#BD007D]">
            Joylashuvni aniqlashni yoqish
          </p>
        </div>
        <div className="bg-[#FFF4E5] p-4 rounded-xl flex items-start gap-x-2 mb-6">
          <span className="text-lg">⚠️</span>
          <p className="text-sm text-gray-700">
            Sizda geolokatsiyani aniqlash taqiqlangan. Brauzer sozlamalaridan
            o'zgartiring va qayta urinib ko'ring. Bu manzilingizni aniqlashga
            yordam beradi.
          </p>
        </div>
        <p className="text-gray-500 mb-2">Barcha mintaqalar</p>
        <ul className="space-y-2">
          {regions.map((region, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-2 px-4 hover:bg-[#F5F6F7] rounded-xl cursor-pointer transition-colors duration-200"
            >
              <span>{region}</span>
              <IoIosArrowForward size={20} className="text-gray-400" />
            </li>
          ))}
        </ul>
        <button className="w-full mt-6 py-3 px-4 bg-[#BD007D] text-white rounded-full font-semibold hover:bg-[#A6006D] transition-colors duration-300">
          O'rtash
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
