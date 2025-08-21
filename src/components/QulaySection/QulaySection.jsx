import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import React, { useState } from "react";

const cardsData = [
  {
    image:
      "https://img.birbir.uz/i/1600x1600-fit/files/0f/cb/dbc3453bf88cfff3505b32a402a7.png",
    title: "Foydali va qulay 1",
  },
  {
    image:
      "https://img.birbir.uz/i/800x800-fit/files/dd/b3/fd4523c82dfd432fea629bd394a8.png",
    title: "Foydali va qulay 2",
  },
  {
    image:
      "https://img.birbir.uz/i/800x800-fit/files/ee/f0/6a58e0565a09e36033737ecf3ef5.png",
    title: "Foydali va qulay 3",
  },
  {
    image:
      "https://img.birbir.uz/i/800x800-fit/files/5c/07/9e28647e7ddb3e5a7406dc857846.png",
    title: "Foydali va qulay 4",
  },
  {
    image:
      "https://img.birbir.uz/i/1600x1600-fit/files/cf/e7/c1248e496f58bb0417483e27b510.png",
    title: "Foydali va qulay 5",
  },
  {
    image:
      "https://img.birbir.uz/i/1600x1600-fit/files/e2/06/07ee17ef97fbe84284a05abfe266.png",
    title: "Foydali va qulay 6",
  },
  {
    image:
      "https://img.birbir.uz/i/1600x1600-fit/files/bd/bf/a6d3df6844a13cf71e72c8d8cc77.png",
    title: "Foydali va qulay 7",
  },
  {
    image:
      "https://img.birbir.uz/i/1600x1600-fit/files/c7/c0/cbdd5483fd80b15c2e7e0f4d93ac.png",
    title: "Foydali va qulay 8",
  },
];

export default function UsefulCards() {
  const itemsPerPage = 4;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="md:max-w-[1100px] lg:max-w-[1230px] mx-auto xl:px-0 px-10">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-[32px] font-bold">Foydali va qulay</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="w-10 h-10 rounded-full cursor-pointer bg-black flex items-center justify-center disabled:opacity-30"
          >
            <FaChevronLeft color="white" />
          </button>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full cursor-pointer bg-black flex items-center justify-center disabled:opacity-30"
          >
            <FaChevronRight color="white" />
          </button>
        </div>
      </div>
      <div className="md:overflow-hidden overflow-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 pr-2 "
          // We set the transform to shift by the percentage of the page
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-col justify-between"
              style={{ flex: `0 0 calc(25% - 12px)` }}
            >
              <div className="flex justify-center ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-w-[296px] h-[260px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
