import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function CategoryMenu() {
  const leftMenu = [
    { name: "Barcha toifalar", key: "all" },
    { name: "Elektronika", key: "electronics" },
    { name: "Maishiy texnika", key: "home" },
    { name: "Mebel va interyer", key: "furniture" },
    { name: "Go'zallik va salomatlik", key: "beauty" },
  ];

  const contentData = {
    all: [
      {
        title: "Telefonlar va aloqa",
        items: ["Mobil telefonlar", "Aksessuarlar", "Ratsiyalar", "Yana 5"],
      },
      {
        title: "O'yinlar, pristavkalar va dasturlar",
        items: [
          "O'yin pristavkalari",
          "Pristavkalar uchun o'yinlar",
          "Kompyuter o'yinlari",
          "Yana 2",
        ],
      },
      {
        title: "Planshetlar va elektron kitoblar",
        items: ["Planshetlar", "Aksessuarlar", "Elektron kitoblar"],
      },
      {
        title: "Audio va video",
        items: ["Televizorlar", "Proektorlar", "Quloqchinlar"],
      },
      {
        title: "Ish stoli kompyuter",
        items: ["Tizimli bloklar", "Serverlar"],
      },
      {
        title: "Ofis jihozlari va sarf materiallari",
        items: ["MFU printerlar", "Printerlar"],
      },
    ],
    electronics: [
      { title: "Elektronika bo'limi", items: ["Telefonlar", "Planshetlar"] },
    ],
    home: [
      {
        title: "Maishiy texnika",
        items: ["Kir yuvish mashinalari", "Sovutkichlar"],
      },
    ],
    furniture: [{ title: "Mebel va interyer", items: ["Divanlar", "Stollar"] }],
    beauty: [
      { title: "Go'zallik va salomatlik", items: ["Kosmetika", "Parfumeriya"] },
    ],
  };

  const [activeKey, setActiveKey] = useState("all");

  return (
    <div className="max-w-[1000px] bg-white shadow-md shadow-t-0 rounded-b-2xl mx-auto flex flex-col md:flex-row h-auto md:h-[340px]">
      {/* Chap menyu */}
      <div className="md:w-1/4 w-full border-b md:border-b-0 md:border-r p-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {leftMenu.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveKey(item.key)}
            className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 whitespace-nowrap ${
              activeKey === item.key ? "bg-blue-50" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* O'ng kontent */}
      <div className="md:w-3/4 w-full p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        {contentData[activeKey].map((block, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2 flex items-center justify-between">
              {block.title} <FaChevronRight size={12} />
            </h3>
            <ul className="space-y-1">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className={
                    item.includes("Yana") ? "text-blue-600 cursor-pointer" : ""
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
