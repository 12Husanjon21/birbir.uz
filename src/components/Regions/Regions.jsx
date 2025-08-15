import React, { useState } from "react";

export default function RegionCard({ regionName, districts }) {
  const [showAll, setShowAll] = useState(false);

  const visibleDistricts = showAll ? districts : districts.slice(0, 12);

  return (
    <div className="bg-white rounded-2xl  font-medium shadow-sm p-[40px] max-w-[1230px] mt-6 mx-auto">
      <h2 className="text-[32px] font-bold mb-8">{regionName}</h2>

      {/* Tumanlar grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3">
        {visibleDistricts.map((district, index) => (
          <span
            key={index}
            className="text-gray-800 text-[18px] hover:text-[#BD007D] transition-colors duration-300 cursor-pointer font-normal"
          >
            {district}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full flex items-center justify-between cursor-pointer bg-white border border-gray-200 rounded-xl py-4 px-5 hover:bg-gray-50 transition"
        >
          <span className="font-semibold">
            Barcha toifalar ${regionName} viloyatida
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
