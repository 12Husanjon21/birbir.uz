import React from 'react'


import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import FileUpload from "./components/FileUpload";
import pic from "../../assets/images/ba29c9670130973eee4c.png";
import Map from "./components/Map";

function Announce() {
  const { t, i18n } = useTranslation();
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

  const listfile = [
    { id: 1, icon: "●", title: t("uploadfiletitle") },
    { id: 2, icon: "●", title: t("listfile.second") },
    { id: 3, icon: "●", title: t("listfile.third") },
    { id: 4, icon: "●", title: t("listfile.fourth") },
    {
      id: 5,
      icon: (
        <svg
          width="12"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#fff"
        >
          <g clipPath="url(#check_svg__a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.192 5.465a1 1 0 010 1.414L9.95 18.122a1.1 1.1 0 01-1.556 0l-5.586-5.586a1 1 0 111.415-1.415l4.95 4.95L19.777 5.465a1 1 0 011.415 0z"
              fill="#fff"
            ></path>
          </g>
          <defs>
            <clipPath id="check_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      title: t("listfile.fifth"),
    },
    { id: 6, icon: "●", title: t("listfile.sixth") },
    { id: 7, icon: "●", title: t("listfile.seventh") },
    { id: 8, icon: "●", title: t("listfile.eighth") },
    { id: 9, icon: "●", title: t("listfile.ninth") },
  ];
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
      // Kiritilgan matn bo'yicha qidiruv
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

    // Xaritani yangilash
    const newMapSrc = `https://yandex.uz/map-widget/v1/?from=api-maps&ll=${item.lon}%2C${item.lat}&z=16&pt=${item.lon},${item.lat},pm2rdm`;
    setMapSrc(newMapSrc);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Biroz kechikish bilan yopish (suggestion bosilganda ishlamay qolmasligi uchun)
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };
  const handleAddressChangeTwo = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setAddressTwo(value);
    }
  };

  const isError = addressTwo.length < minLength && addressTwo.length > 0;
  const isMaxReached = address.length >= maxLength;

  return (
    <div className="bg-[#F5F6F7] min-h-screen font-sans">
      <div className="xl:w-[1280px] mx-auto space-y-2">
        <h1 className="hidden lg:block text-[36px] py-[32px] font-sans font-bold leading-[44px]">
          {t("putstitle")}
        </h1>
        <div className="space-y-2 lg:flex lg:space-y-0 justify-between gap-[16px] px-2 ">
          <div className="lg:hidden py-[16px] bg-white p-4 rounded-[24px]">
            <div className="flex items-center justify-between py-3">
              <span
                className="button-module__buttonIcon--bXiwL button-module__onlyIcon--xe5hs"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#27383F"
                >
                  <g clipPath="url(#arrow-left-long_svg__a)">
                    <path
                      d="M3.636 11.293a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414-1.414L6.757 13H20a1 1 0 100-2H6.757l3.95-3.95a1 1 0 00-1.414-1.414l-5.657 5.657z"
                      fill="#27383F"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="arrow-left-long_svg__a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="text-[#A7AFBC] font-[500]">{t("notepad")}</p>
            </div>
            <div className="flex items-center justify-between gap-[3px]">
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-green-500"></div>
              <div
                className={`w-[35px] md:w-[70px] h-[4px] rounded-full ${
                  isSwitchOn ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
              <div className="w-[35px] md:w-[70px] h-[4px] rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("uploadfiletitle")}
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              {t("uploadfiletitledesc")}
            </p>
            <FileUpload />
          </div>
          <div className="hidden lg:block bg-white p-4 rounded-[24px] sticky  top-4 h-fit overflow-y-auto">
            {listfile.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-2 p-4 font-[400] leading-[5px]"
              >
                <span
                  className={`text-[24px] ${
                    item.id === 5
                      ? "bg-green-500 text-white rounded-full px-1.5"
                      : "text-[#a7afbc]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[18px] ${
                    item.id === 5 ? "text-black" : "text-[#a7afbc]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 space-y-2">
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("listfile.second")}
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              {t("listfilesecond")}
            </p>
            <div className="px-4 py-[16px]">
              <input
                type="text"
                className="bg-[#F5F6F7] w-full lg:w-[83%] rounded-[16px] py-[12px] text-[14px] px-4"
                placeholder={t("listfilesecondplach")}
              />
            </div>
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("listfile.third")}
            </h3>
            <button className="bg-[#F5F6F7] w-full lg:w-[80%] text-[#5C6A6F] font-[500] rounded-[16px] mt-[24px] py-[12px] text-[14px] px-4 mx-4">
              {t("listfilesecondbutton")}
            </button>
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <div className="">
              <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
                {t("listfile.fourth")}
              </h3>
              <div className="bg-[#F5F6F7] w-full lg:w-[80%] text-[#5C6A6F] font-[500] rounded-[16px] mt-[24px]  text-[14px] flex items-center justify-between mx-4">
                <img src={pic} alt="picture" className="rounded-bl-[16px]" />
                <p>{t("listfilefourthdesc")}</p>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isSwitchOn}
                  onClick={() => setIsSwitchOn(!isSwitchOn)}
                  className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 mr-[16px] ${
                    isSwitchOn ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 mr-[16px] ${
                      isSwitchOn ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            {isSwitchOn && (
              <div className="bg-white rounded-[24px] mt-[24px]">
                <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
                  {t("sena")}
                </h3>

                <div className="w-full lg:w-[83%] px-4 py-[16px] flex items-center justify-between gap-[16px]">
                  <input
                    type="text"
                    className="bg-[#F5F6F7] w-full  rounded-[16px] py-[12px] text-[14px] px-4"
                    placeholder={t("listfilesecondplach")}
                  />
                  <div
                    className="flex  gap-2 "
                    tabIndex={0}
                    style={{ outline: "none" }}
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={currency === "uzs"}
                      tabIndex={currency === "uzs" ? 0 : -1}
                      onClick={() => setCurrency("uzs")}
                      className={`px-4 py-2.5 rounded-[16px] font-bold text-[14px] ${
                        currency === "uzs"
                          ? "bg-[#27383F] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {t("sum")}
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={currency === "usd"}
                      tabIndex={currency === "usd" ? 0 : -1}
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
                    name="check"
                    id="check"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className={`w-4 h-4 rounded-[16px] bg-[#F5F6F7] border-none transition-colors duration-200 ${
                      isChecked ? "bg-[#27383F]" : "bg-[#F5F6F7]"
                    }`}
                  />
                  <span className="text-[#5F6C71] text-[16px] font-medium">
                    {t("torg")}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("listfile.sixth")}
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              {t("listfilesixthdesc")}
            </p>
            <Map />
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("desc.first")}
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              {t("desc.first_desc")}
            </p>
            <div className="px-4 py-[16px]">
              <textarea
                cols="30"
                rows="10"
                // value={address}
                onChange={handleAddressChangeTwo}
                className={`bg-[#F5F6F7] w-full rounded-[16px] py-[12px] text-[14px] px-4 resize-none focus:outline-none ${
                  isError
                    ? "border-2 border-red-500"
                    : "border-2 border-transparent focus:border-blue-500"
                }`}
                placeholder={t("desc.firstplach")}
              />

              {/* Counter va xabar */}
              <div className="flex justify-between items-start mt-2">
                <div>
                  {isError && (
                    <p className="text-red-500 text-sm font-medium">
                      Заполните поле: мин. 15 символов
                    </p>
                  )}
                </div>
                <div
                  className={`text-sm font-medium ${
                    isError ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {addressTwo.length}/{maxLength}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] bg-white p-4 rounded-[24px]">
            <h3 className="text-[20px] lg:text-[24px] lg:py-2 px-4 leading-[32px] font-bold">
              {t("auth.title")}
            </h3>
            <p className="text-[14px] lg:text-[18px] px-4 md:font-[500]">
              {t("auth.desc")}
            </p>
           <button className="bg-[#BD007D] text-white font-[500] w-full p-[8px] rounded-[16px] mt-[24px] cursor-pointer">{t('auth.button')}</button>
          </div>
          <div className="lg:w-[70%]">
          <button className="text-white bg-[#27383F] px-4 rounded-[16px] flex ml-auto py-2">{t('notesaved')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announce;
