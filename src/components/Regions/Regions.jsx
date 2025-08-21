import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegionCard({ regionName, districts }) {
  const [showAll, setShowAll] = useState(false);

  const visibleDistricts = showAll ? districts : districts.slice(0, 100);

  return (
    <div className="bg-white rounded-2xl  font-medium shadow-sm p-[40px] max-w-[1230px] mt-6 mx-auto">
      <h2 className="text-[34px] font-bold inline-block mb-8 mt-3 hover:text-[#BD007D] transition-colors duration-300">
        <Link to={`/`}>{regionName}</Link>
      </h2>

      {/* Tumanlar grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 gap-y-3.5">
        {visibleDistricts.map((district, index) => (
          <span
            key={index}
            className="text-[#273864] text-[19px] hover:text-[#BD007D] transition-colors duration-300 cursor-pointer font-normal"
          >
            {district}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <button className="w-full flex items-center justify-between cursor-pointer hover:text-gray-500 bg-white border border-gray-200 rounded-xl py-6 px-5 hover:bg-gray-50 transition">
          <span className="font-semibold  text-[19px]">
            Barcha toifalar {regionName}da
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
