import { useState } from "react";
import { useTranslation } from "react-i18next";


function Map() {
  const { t, i18n } = useTranslation();

  const [address, setAddress] = useState("Ташкент");
  const [landmark, setLandmark] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [canDeliver, setCanDeliver] = useState(false);
  const [mapSrc, setMapSrc] = useState(
    "https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.272903%2C41.310433&z=12&pt=69.272903,41.310433,pm2rdm"
  );

  // Demo uchun statik manzillar ro'yxati
  const demoAddresses = [
    { name: "Ташкент, улица Укчи, 2", lat: 41.311151, lon: 69.279737 },
    { name: "Ташкент, улица Батыра Закирова, 7", lat: 41.326418, lon: 69.228431 },
    { name: "Ташкент, Юнусабадский район", lat: 41.351688, lon: 69.289063 },
    { name: "Ташкент", lat: 41.310433, lon: 69.272903 },
    { name: "Ташкент, Мирабадский район, проспект Амира Темура, 19", lat: 41.308254, lon: 69.282455 },
    { name: "Узбекистан, Ташкент, Яшнабадский район, улица Шахрисабз, 87", lat: 41.275547, lon: 69.203496 },
    { name: "Ташкент, Чиланзарский район", lat: 41.275547, lon: 69.203496 },
    { name: "Ташкент, Сергелийский район", lat: 41.225761, lon: 69.220779 },
    { name: "Ташкент, улица Навои", lat: 41.323975, lon: 69.289719 }
  ];

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);

    if (value.length > 1) {
      // Kiritilgan matn bo'yicha qidiruv
      const filtered = demoAddresses.filter(addr => 
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
    setSuggestions([]);
    setShowSuggestions(false);
    
    // Xaritani yangilash
    const newMapSrc = `https://yandex.uz/map-widget/v1/?from=api-maps&ll=${item.lon}%2C${item.lat}&z=15&pt=${item.lon},${item.lat},pm2rdm`;
    setMapSrc(newMapSrc);
  };

  const handleInputFocus = () => {
    if (address.length > 1) {
      const filtered = demoAddresses.filter(addr => 
        addr.name.toLowerCase().includes(address.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const detectLocation = () => {
    // Hozirgi joylashuvni aniqlash
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const newMapSrc = `https://yandex.uz/map-widget/v1/?from=api-maps&ll=${lon}%2C${lat}&z=16&pt=${lon},${lat},pm2rdm`;
        setMapSrc(newMapSrc);
        setAddress("Ваше текущее местоположение");
      });
    }
  };

  return (
          <div className="w p-6 gap-6">
            <div className="flex-1">
              <div className="relative mb-4">
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden" style={{height: '360px'}}>
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height="360"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                    title="Yandex Map"
                  />
                  {/* Fixed center marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M20 0C13.373 0 8 5.373 8 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" fill="#FF0000"/>
                      <circle cx="20" cy="12" r="4" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right side - Form */}
            <div className="w-full">
              {/* Address field */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('address')}
                </label>
                {/* Location detect button */}
              <button
                type="button"
                onClick={detectLocation}
                className="flex ml-auto items-center gap-2 px-4 bg-whiterounded-2xl text-[#18a0da] text-[14px] font-[400] hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.768 2.693c.956-.344 1.88.58 1.536 1.535l-6.04 16.777c-.375 1.043-1.842 1.063-2.246.03l-2.829-7.228-7.228-2.828c-1.032-.404-1.012-1.871.03-2.247l16.777-6.04z" fill="#18a0da"/>
                </svg>
                {t('locationon')}
              </button>
                </div>
                <div className="relative">
                  <div className="bg-[#F5F6F7] rounded-2xl border border-transparent hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-200">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className="flex-1 bg-transparent py-3 px-4 text-sm focus:outline-none text-gray-800 placeholder-gray-400"
                        placeholder="Адрес, магазин или метро"
                      />
                      <div className="px-4 py-3">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className={`transition-transform duration-200 ${showSuggestions ? 'rotate-180' : ''}`}
                        >
                          <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12.756 15.695a1.056 1.056 0 01-1.486 0L5.32 9.793a1.043 1.043 0 01-.243-1.145 1.043 1.043 0 01.575-.57 1.059 1.059 0 011.155.24l5.205 5.164 5.205-5.164a1.056 1.056 0 011.474.013 1.039 1.039 0 01.013 1.462l-5.949 5.902z" 
                            fill="#a7afbc"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Suggestions dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl mt-1 shadow-xl z-30 max-h-80 overflow-y-auto">
                      <ul className="py-2">
                        {suggestions.map((item, index) => (
                          <li
                            key={index}
                            role="option"
                            onClick={() => handleSelectSuggestion(item)}
                            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                              item.name === address ? 'bg-blue-50' : ''
                            }`}
                          >
                            <p className="text-gray-800 text-base leading-relaxed">
                              {item.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Landmark field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('oriyentr')}
                </label>
                <div className="bg-[#F5F6F7] rounded-2xl border border-transparent hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-200">
                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full bg-transparent py-3 px-4 text-sm focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Например, алайский рынок"
                  />
                </div>
              </div>

              {/* Delivery checkbox */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCanDeliver(!canDeliver)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    canDeliver 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'bg-white border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {canDeliver && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path 
                        d="M10 3L4.5 8.5L2 6" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <label 
                  onClick={() => setCanDeliver(!canDeliver)}
                  className="text-sm text-gray-700 cursor-pointer select-none"
                >
                  Могу организовать доставку
                </label>
              </div>
            </div>
          </div>
  );
}

export default Map;