import React from "react";
import { useState } from "react";

// Placeholder data for the new cards section
const cardsData = [
  {
    image: "https://placehold.co/296x296",
    price: "207 000 so'm",
    title: "Aqilli Wi-fi kamera",
    location: "Toshkent",
    date: "07.06.2025, 23:53",
  },
  {
    image: "https://placehold.co/296x296",
    price: "500 000 so'm",
    title: "detskiy stulchik 500000",
    location: "Toshkent",
    date: "24.07.2025, 13:28",
  },
  {
    image: "https://placehold.co/296x296",
    price: "Bepul",
    title: "remont bytovoy texniki",
    location: "Toshkent",
    date: "25.03.2025, 18:24",
  },
  {
    image: "https://placehold.co/296x296",
    price: "2 000 000 so'm",
    title: "Naushnik BOSE 35 ||",
    location: "Toshkent",
    date: "07.08.2025, 13:10",
  },
  {
    image: "https://placehold.co/296x296",
    price: "207 000 so'm",
    title: "Aqilli Wi-fi kamera",
    location: "Toshkent",
    date: "07.06.2025, 23:53",
  },
  {
    image: "https://placehold.co/296x296",
    price: "500 000 so'm",
    title: "detskiy stulchik 500000",
    location: "Toshkent",
    date: "24.07.2025, 13:28",
  },
  {
    image: "https://placehold.co/296x296",
    price: "Bepul",
    title: "remont bytovoy texniki",
    location: "Toshkent",
    date: "25.03.2025, 18:24",
  },
  {
    image: "https://placehold.co/296x296",
    price: "2 000 000 so'm",
    title: "Naushnik BOSE 35 ||",
    location: "Toshkent",
    date: "07.08.2025, 13:10",
  },
  {
    image: "https://placehold.co/296x296",
    price: "207 000 so'm",
    title: "Aqilli Wi-fi kamera",
    location: "Toshkent",
    date: "07.06.2025, 23:53",
  },
  {
    image: "https://placehold.co/296x296",
    price: "500 000 so'm",
    title: "detskiy stulchik 500000",
    location: "Toshkent",
    date: "24.07.2025, 13:28",
  },
  {
    image: "https://placehold.co/296x296",
    price: "Bepul",
    title: "remont bytovoy texniki",
    location: "Toshkent",
    date: "25.03.2025, 18:24",
  },
  {
    image: "https://placehold.co/296x296",
    price: "2 000 000 so'm",
    title: "Naushnik BOSE 35 ||",
    location: "Toshkent",
    date: "07.08.2025, 13:10",
  },
];

export default function CardsSection() {
  const [likedCards, setLikedCards] = useState(new Set());
  const handleLikeClick = (index) => {
    // Create a new Set to trigger a re-render
    const newLikedCards = new Set(likedCards);
    if (newLikedCards.has(index)) {
      newLikedCards.delete(index); // Unlike the card
    } else {
      newLikedCards.add(index); // Like the card
    }
    setLikedCards(newLikedCards);
  };
  return (
    <div className="max-w-[1230px] mx-auto mt-[110px] mb-[100px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[32px] font-bold">Qiziqarli</h2>
      </div>
      {/* Start of the new cards grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            // Added 'group' class here
            className="group cursor-pointer overflow-hidden bg-white"
          >
            <div className="w-full h-[296px] flex justify-center items-center relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/300x200?text=Image+Not+Found";
                }}
              />
              <button
                onClick={() => handleLikeClick(index)}
                className="absolute bottom-2 right-2 p-2 cursor-pointer bg-white rounded-full shadow-md"
              >
                {/* You can add a heart icon here, for example */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-colors duration-300 ease-in-out ${
                    likedCards.has(index) ? "text-red-500" : "text-gray-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 pl-0">
              <p
                // Added 'group-hover:text-blue-500' here
                className="text-xl font-bold mb-2  "
              >
                {card.price}
              </p>
              <h3 className="text-[18px] font-normal mb-3 transition duration-300 ease-in-out group-hover:text-[#BD007D]">
                {card.title}
              </h3>
              <div className="flex-col items-center text-[18px] text-gray-400 mt-4">
                <p>{card.location}</p>
                <p>{card.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End of the new cards grid section */}
    </div>
  );
}
