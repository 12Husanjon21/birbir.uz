import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <div className="p-4">
      {/* Search + Categories Button */}
      <div className="flex gap-2 mb-4 items-center">
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "Закрыть" : "Категории"}
        </button>
        <input
          type="text"
          placeholder="Найти iPhone 15 Pro"
          className="border p-2 rounded-lg flex-1"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
          🔍
        </button>
      </div>

      {/* Categories Swiper */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          openMenu ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        <Swiper spaceBetween={10} slidesPerView={4}>
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border rounded-lg p-2 text-center shadow-sm">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="mx-auto mb-2 w-12 h-12 object-contain"
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
          <div className="bg-white shadow-lg p-4 rounded-lg border max-h-[500px] overflow-y-auto">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg">{menu.title}</h3>
                <ul className="text-sm text-gray-700 ml-4 list-disc">
                  {menu.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
