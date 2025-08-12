import { Swiper as Slide, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Swiper() {
  const cards = [
    {
      img: "https://file.birbir.uz/web/frontend/adv1.png",
      title: "Широкий выбор",
      text: "Новые и подержанные товары, уникальные находки, услуги в разных категориях и акционные предложения",
    },
    {
      img: "https://file.birbir.uz/web/frontend/adv2.png",
      title: "Прямые сделки",
      text: "Операции без посредников, дополнительных комиссий и скрытых наценок",
    },
    {
      img: "https://file.birbir.uz/web/frontend/adv3.png",
      title: "Удобство",
      text: "Быстрый поиск в мобильном приложении, «умные» подборки и оптимизация объявлений с помощью ИИ",
    },
    {
      img: "https://file.birbir.uz/web/frontend/adv4.png",
      title: "Безопасность",
      text: "Строгая проверка учётных записей, продавцов и объявлений перед публикацией",
    },
    {
      img: "https://file.birbir.uz/web/frontend/adv5.png",
      title: "Личное общение",
      text: "Возможность обсудить цену, условия оплаты, способы доставки и другие детали с участником сделки",
    },
    {
      img: "https://file.birbir.uz/web/frontend/adv6.png",
      title: "Простота",
      text: "Платформа, созданная людьми для людей — здесь от поиска до сделки один шаг",
    },
  ];

  return (
    <Slide
      spaceBetween={8}
      slidesPerView={"auto"} // base (mobile)
      breakpoints={{
        640: { slidesPerView: 2.5, spaceBetween: 8 }, // tablet
        1024: { slidesPerView: 4, spaceBetween: 8 }, // desktop
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="align-left"
    >
      {cards.map((c, i) => (
        <SwiperSlide key={i} className="w-full mx-1">
          <div className="style-module__card--rD9I4 style-module__advantageCard--p0d0n flex-col items-center">
            <div className="flex items-center justify-center w-[88px] h-[88px]">
              <img
                src={c.img}
                alt={c.title}
                className="max-h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-left">{c.title}</h3>
              <p className="text-sm text-gray-600 text-left">{c.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Slide>
  );
}
