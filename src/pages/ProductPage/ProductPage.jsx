import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardsData } from "../../utils/index";
import { FaPhone, FaTelegram, FaRegHeart, FaStar } from "react-icons/fa";

export default function ProductPage() {
  const { id } = useParams();
  const product = cardsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        Mahsulot topilmadi
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl  p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Главная / Мебель и интерьер /{" "}
        <span className="text-gray-800">Спальня и шкаф</span>
      </div>

      {/* Mahsulot ma'lumotlari */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Rasmlar */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow"
          />
          <div className="flex gap-2 mt-2">
            <img src={product.image} className="w-20 h-20 rounded-lg border" />
            <img src={product.image} className="w-20 h-20 rounded-lg border" />
          </div>
        </div>

        {/* Narx va aloqa */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.price}</h2>
          <p className="text-gray-600 mb-4">{product.title}</p>

          <div className="flex gap-3 mb-4">
            <button className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaPhone /> Telefon
            </button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaTelegram /> Telegram
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-green-500" />
            <span>Maftuna • 1 e'lon</span>
          </div>

          <button className="bg-gray-100 px-4 py-2 rounded">Подписаться</button>
        </div>
      </div>

      {/* Xususiyatlar */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-2">Xususiyatlar</h3>
        <p>Kategoriya: Mebel va interyer</p>
        <p>Holati: Yangi (3 oylik)</p>
        <p>Qo‘lda tayyorlangan: Ha</p>
      </div>

      {/* Tavsif */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-2">Tavsif</h3>
        <p>
          Mebel sotiladi. Narxi kelishiladi. Holati yangi. Uy joy masalasi
          sababli sotilmoqda.
        </p>
      </div>
    </div>
  );
}
