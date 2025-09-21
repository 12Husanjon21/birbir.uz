import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import pic from "../../assets/images/ba29c9670130973eee4c.png";
import Map from "./components/Map";
import { postData } from "../../utils/utils";

function Announce() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currency, setCurrency] = useState("uzs");
  const [isChecked, setIsChecked] = useState(false);
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mapSrc, setMapSrc] = useState(
    "https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.272903%2C41.310433&z=15.5"
  );
  const [addressTwo, setAddressTwo] = useState("");
  const maxLength = 1000;
  const minLength = 15;

  const [uploadedFiles, setUploadedFiles] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 1,
    condition: true ? "new" : "used",
    is_negotiable: isChecked,
    is_urgent: false,
    is_free: false,
    has_delivery: false,
    category: "",
    subcategory: "",
    location: "",
    latitude: 0,
    longitude: 0,
    is_active: true,
    slug: "",
    status: 0,
    tab: "",
    should_expired_at: {},
    first_published_at: {},
    publishable: true,
    issues: "",
    web_uri: "",
    payload: "",
    promotion_data: "",
    statistics: "",
    notice_top: "",
    notice_bottom: "",
    delivery_enabled: true,
    gross_price: 0,
    gross_price_discount: 0,
    badges: "",
    region_id: "",
  });

  const demoAddresses = [
    {
      name: "Узбекистан, Ташкент, Мирабадский район, проспект Амира Темура, 19",
      lat: 41.311151,
      lon: 69.279737,
    },
    {
      name: "Узбекистан, Ташкент, Яккасарайский район, улица Бобура, 15",
      lat: 41.326418,
      lon: 69.228431,
    },
    {
      name: "Узбекистан, Ташкент, Чиланзарский район, проспект Бунёдкор, 28",
      lat: 41.275547,
      lon: 69.203496,
    },
    {
      name: "Узбекистан, Ташкент, Шайхантахурский район, улица Навои, 47",
      lat: 41.323975,
      lon: 69.289719,
    },
    {
      name: "Узбекистан, Ташкент, Юнусабадский район, улица Абдулла Кадыри, 12",
      lat: 41.351688,
      lon: 69.289063,
    },
    {
      name: "Узбекистан, Ташкент, Сергелийский район, Новый Сергели",
      lat: 41.225761,
      lon: 69.220779,
    },
    {
      name: "Узбекистан, Ташкент, Мирабадский район, улица Ойбека, 33",
      lat: 41.308254,
      lon: 69.282455,
    },
    {
      name: "Узбекистан, Ташкент, Бектемирский район, Чинобод",
      lat: 41.232842,
      lon: 69.334717,
    },
    {
      name: "Узбекистан, Ташкент, магазин Макро на Кольцевой",
      lat: 41.299496,
      lon: 69.240074,
    },
    {
      name: "Узбекистан, Ташкент, метро Пушкин",
      lat: 41.314515,
      lon: 69.249908,
    },
    {
      name: "Узбекистан, Ташкент, метро Космонавтлар",
      lat: 41.326168,
      lon: 69.228764,
    },
    {
      name: "Узбекистан, Ташкент, Samarqand Darvoza метро",
      lat: 41.318161,
      lon: 69.282188,
    },
  ];

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    setSelectedAddress(value);

    if (value.length > 2) {
      const filtered = demoAddresses.filter((addr) =>
        addr.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (item) => {
    setAddress(item.name);
    setSelectedAddress(item.name);
    setSuggestions([]);
    setShowSuggestions(false);

    const newMapSrc = `https://yandex.uz/map-widget/v1/?from=api-maps&ll=${item.lon}%2C${item.lat}&z=16&pt=${item.lon},${item.lat},pm2rdm`;
    setMapSrc(newMapSrc);
  };

  const handleAddressChangeTwo = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setAddressTwo(value);
    }
  };

  const sendDataToApi = () => {
    postData("/api/products", uploadedFiles).then((data) => {
      console.log(data);
    });
  };

  const isError = addressTwo.length < minLength && addressTwo.length > 0;

  return (
    <div className="px-4 min-h-screen font-sans">
      <div className="xl:w-[1280px] mx-auto space-y-2">
        <h1 className="hidden lg:block text-[36px] py-[32px] font-sans font-bold leading-[44px]">
          Создать объявление
        </h1>
        <div className="space-y-2 lg:flex lg:space-y-0 justify-between gap-[16px] px-2 ">
          <div className="lg:hidden py-[16px] bg-white p-4 rounded-[24px]">
            <div className="flex items-center justify-between py-3">
              <span aria-hidden="true">←</span>
              <p className="text-[#A7AFBC] font-[500]">Блокнот</p>
            </div>
            <div className="flex items-center justify-between gap-[3px]">
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-green-500"></div>
              <div
                className={`w-[35px] md:w-[70px] h-[4px] rounded-full ${
                  isSwitchOn ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              Загрузите фото
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              Добавьте фотографии для вашего объявления
            </p>
            <FileUpload />
          </div>
        </div>

        <div className="px-2 space-y-2">
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 font-bold">
              Заголовок объявления
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              Укажите название вашего объявления
            </p>
            <div className="px-4 py-[16px]">
              <input
                type="text"
                className="bg-[#F5F6F7] w-full lg:w-[83%] rounded-[16px] py-[12px] text-[14px] px-4"
                placeholder="Введите заголовок"
                onChange={(e) =>
                  setUploadedFiles({ ...uploadedFiles, name: e.target.value })
                }
              />
            </div>
          </div>
          {/* 
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 font-bold">
              Категория
            </h3>
            <button className="bg-[#F5F6F7] w-full lg:w-[80%] text-[#5C6A6F] font-[500] rounded-[16px] mt-[24px] py-[12px] text-[14px] px-4 mx-4">
              Выберите категорию
            </button>
          </div> */}

          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 font-bold">
              Цена
            </h3>
            <div className="bg-[#F5F6F7] w-full lg:w-[80%] rounded-[16px] mt-[24px] text-[14px] flex items-center justify-between mx-4 p-2">
              <img src={pic} alt="pic" />
              <p>Укажите стоимость</p>
              <button
                type="button"
                onClick={() => setIsSwitchOn(!isSwitchOn)}
                className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 mr-[16px] ${
                  isSwitchOn ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                    isSwitchOn ? "translate-x-6" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {isSwitchOn && (
            <div className="bg-white rounded-[24px] mt-[24px]">
              <h3 className="text-[20px] lg:text-[24px] px-4 font-bold">
                Цена
              </h3>
              <div className="w-full lg:w-[83%] px-4 py-[16px] flex items-center justify-between gap-[16px]">
                <input
                  type="number"
                  className="bg-[#F5F6F7] w-full rounded-[16px] py-[12px] text-[14px] px-4"
                  placeholder="Введите сумму"
                  onChange={(e) =>
                    setUploadedFiles({
                      ...uploadedFiles,
                      price: Number(e.target.value), // ✅ FIXED
                    })
                    // console.log(typeof Number(e.target.value))
                  }
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrency("uzs")}
                    className={`px-4 py-2.5 rounded-[16px] font-bold text-[14px] ${
                      currency === "uzs"
                        ? "bg-[#27383F] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    Сум
                  </button>
                  <button
                    onClick={() => setCurrency("usd")}
                    className={`px-4 py-2.5 rounded-[16px] font-bold text-[14px] ${
                      currency === "usd"
                        ? "bg-[#27383F] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    $
                  </button>
                </div>
              </div>
              <div className="flex items-center px-4 gap-[16px]">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-4 h-4 rounded bg-[#F5F6F7]"
                />
                <span className="text-[#5F6C71] text-[16px] font-medium">
                  Торг возможен
                </span>
              </div>
            </div>
          )}

          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] px-4 font-bold">Адрес</h3>
            <p className="text-[14px] lg:text-[18px] px-4">
              Укажите местоположение
            </p>
            <Map data={uploadedFiles} setData={setUploadedFiles} />
          </div>

          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] px-4 font-bold">
              Описание
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4">
              Расскажите подробнее о вашем товаре
            </p>
            <div className="px-4 py-[16px]">
              <textarea
                onChange={(e) =>
                  setUploadedFiles({
                    ...uploadedFiles,
                    description: e.target.value,
                  })
                }
                className={`bg-[#F5F6F7] w-full rounded-[16px] py-[12px] text-[14px] px-4 resize-none ${
                  isError
                    ? "border-2 border-red-500"
                    : "border-2 border-transparent focus:border-blue-500"
                }`}
                placeholder="Введите описание..."
              />
              <div className="flex justify-between items-start mt-2">
                {isError && (
                  <p className="text-red-500 text-sm">Минимум 15 символов</p>
                )}
                <div className="text-sm text-gray-400">
                  {addressTwo.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] px-4 font-bold">Автор</h3>
            <p className="text-[14px] lg:text-[18px] px-4">
              Введите данные для связи
            </p>
            <button
              onClick={() => sendDataToApi()}
              className="bg-[#BD007D] text-white font-[500] w-full p-[8px] rounded-[16px] mt-[24px]"
            >
              Подтвердить
            </button>
          </div>

          {/* <div className="lg:w-[70%]">
            <button className="text-white bg-[#27383F] px-4 rounded-[16px] flex ml-auto py-2">
              Сохранить
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Announce;
