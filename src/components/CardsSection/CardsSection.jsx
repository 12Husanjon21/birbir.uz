import { useState } from "react";
import { Link } from "react-router-dom";
import { cardsData } from "../../utils/index";

export default function CardsSection({ showTitle = true }) {
  const [likedCards, setLikedCards] = useState(new Set());

  const handleLikeClick = (index) => {
    const newLikedCards = new Set(likedCards);
    if (newLikedCards.has(index)) {
      newLikedCards.delete(index);
    } else {
      newLikedCards.add(index);
    }
    setLikedCards(newLikedCards);
  };

  return (
    <div className="max-w-[1230px] mx-auto mt-[110px] mb-[100px]">
      {showTitle && (
        <div className="flex justify-between xl:px-0 px-10 items-center mb-6">
          <h2 className="text-[32px] font-bold">Qiziqarli</h2>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:px-0 px-10 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <Link
            to={`/product/${card.id}`}
            key={card.id}
            className="group cursor-pointer overflow-hidden bg-white"
          >
            <div className="w-full max-h-[296px] flex justify-center items-center relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                onClick={(e) => {
                  e.preventDefault(); // linkni to‘xtatamiz
                  handleLikeClick(card.id);
                }}
                className="absolute bottom-2 right-2 p-2 cursor-pointer bg-white rounded-full shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    likedCards.has(card.id) ? "text-red-500" : "text-gray-500"
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
              <p className="text-xl font-bold mb-2">{card.price}</p>
              <h3 className="text-[18px] font-normal mb-3 transition duration-300 group-hover:text-[#BD007D]">
                {card.title}
              </h3>
              <div className="flex-col items-center text-[18px] text-gray-400 mt-4">
                <p>{card.location}</p>
                <p>{card.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
