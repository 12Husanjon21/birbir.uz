import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoSearch } from "react-icons/go";
import "swiper/css";

export default function Filter() {
  const [openMenu, setOpenMenu] = useState(false);

  const categories = [
    { name: "Электроника", img: "/images/electronics.png" },
    { name: "Бытовая техника", img: "/images/appliances.png" },
    { name: "Мебель и интерьер", img: "/images/furniture.png" },
    { name: "Красота и здоровье", img: "/images/beauty.png" },
    { name: "Одежда и обувь", img: "/images/clothes.png" },
    { name: "Аксессуары", img: "/images/accessories.png" },
  ];

  const menuItems = [
    {
      title: "Телефоны и связь",
      items: ["Мобильные телефоны", "Аксессуары", "Рации", "Смарт-часы"],
    },
    {
      title: "Игры и программы",
      items: ["Игровые приставки", "Компьютерные игры", "VR-гарнитуры"],
    },
    {
      title: "Компьютеры",
      items: ["Ноутбуки", "Мониторы", "Комплектующие", "Периферия"],
    },
    { title: "Аудио", items: ["Наушники", "Колонки", "Микрофоны"] },
    { title: "Фото и видео", items: ["Камеры", "Объективы", "Дроны"] },
    {
      title: "Бытовая техника",
      items: ["Холодильники", "Пылесосы", "Микроволновки", "Стиральные машины"],
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto ">
      {/* Search + Categories Button */}
      <div className="bg-[#F5F6F7] p-2 rounded-xl flex gap-2 mb-4 items-center">
        <button
          className="bg-[#26A560] text-white px-4 py-5 rounded-xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "Закрыть" : "Категории"}
        </button>
        <input
          type="text"
          placeholder="Найти iPhone 15 Pro"
          className=" flex-1 px-4 py-3 rounded-xl text-[18px] focus:outline-none"
        />
        <button className="bg-[#26A560] text-white p-4 rounded-xl">
          <GoSearch size={24} />
        </button>
      </div>

      {/* Categories Swiper */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          openMenu ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F5F6F7] rounded-lg p-3 text-center shadow-sm hover:shadow-md cursor-pointer transition">
                <img
                  src={"https://placehold.co/120x120"}
                  alt={cat.name}
                  className="mx-auto mb-2 w-24 h-24 object-contain rounded-lg"
                />
                <p className="text-sm">{cat.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Filter Menu */}
      <div
        className={`transition-all duration-300 ${
          openMenu ? "opacity-100 mt-4" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {openMenu && (
          <div className="bg-[#F5F6F7] shadow-lg p-4 rounded-lg  max-h-[500px] overflow-y-auto flex">
            {/* Left side categories */}
            <div className="w-1/4 border-r pr-4">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                    i === 0 ? "bg-gray-100" : ""
                  }`}
                >
                  <img
                    src={"https://placehold.co/40x40"}
                    alt={cat.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Right side menu */}
            <div className="w-3/4 grid grid-cols-2 gap-6 pl-4">
              {menuItems.map((menu, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-base mb-2">{menu.title}</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {menu.items.map((item, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:text-[#26A560]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
