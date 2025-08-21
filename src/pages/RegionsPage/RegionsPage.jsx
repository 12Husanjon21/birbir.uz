import React from "react";
import RegionCard from "../../components/Regions/Regions";

export default function RegionsPage() {
  // Static ma’lumotlar
  const andijonDistricts = [
    "Andijon",
    "Paxtaobod",
    "Shahrixon",
    "Buloqboshi",
    "Qorasuv",
    "Asaka",
    "Poytug'",
    "Kuyganyor",
    "Bo‘z",
    "Jalaquduq",
    "Xonobod",
    "Oltinko‘l",
    "Marhamat",
    "Qo‘rg‘ontepa",
    "Xo‘jaobod",
    "Baliqchi",
    "Oqoltin",
  ];

  const toshkentDistricts = [
    "Toshkent",
    "Oqqo'rg'on",
    "Olmaliq",
    "Angren",
    "Ohangaron",
    "Bekobod",
    "Bo'ka",
    "G'azalkent",
    "Gulbahor",
    "Do'stobod",
    "Zafar",
    "Keles",
    "Qibray",
    "Qizil-Tog'",
    "Parkent",
    "Pskent",
    "Nurafshon",
    "Chinoz",
    "Chirchiq",
    "Eshonguzar",
    "Yangibozor",
    "Yangiyo'l",
    "Chimg'on",
    "Iskandar",
    "Xo'jakent",
    "Chorvoq",
    "Durmen",
    "Zangiota",
    "Ko'k'saroy",
    "Nazarbek",
    "Turkiston",
    "O'rtaovul",
    "Salar",
    "So'qoqsoy",
    "Tashmore",
    "Yangiobod",
  ];

  const buxoroDistricts = [
    "Buxoro",
    "Olot",
    "Vobkent",
    "Gazli",
    "Galaosiyo",
    "Gʻijduvon",
    "Kogon",
    "Qorakoʻl",
    "Romitan",
    "Shofirkon",
    "Jondor",
    "Qorovulbozor",
  ];

  return (
    <div className="max-w-[1230px] mx-auto font-bold xl:px-0 px-10 mb-16 lg:mb-[100px]">
      <h2 className="md:text-[48px] text-[32px] mt-[90px] line-height-[48px] mb-[50px]">
        O'zbekistonning barcha viloyatlari
      </h2>

      <RegionCard
        regionName="Toshkent viloyati"
        districts={toshkentDistricts}
      />
      {/* Viloyat kartasi props orqali */}
      <RegionCard regionName="Andijon viloyati" districts={andijonDistricts} />
      <div></div>
      <RegionCard regionName="Buxoro viloyati" districts={buxoroDistricts} />
    </div>
  );
}
