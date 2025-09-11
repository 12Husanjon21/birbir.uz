import React from "react";
import UsefulCards from "../../components/QulaySection/QulaySection";
import CardsSection from "../../components/CardsSection/CardsSection";
import IntroSection from "../../components/IntroSec/IntroSectiom";
import Button from "../../components/Buttons/Buttons";
import Filter from "./Filter";

export default function HomePage() {
  return (
    <>
      <section className="style-module__section--xDKx0 bg-white">
        <div className="container-module__container--dFCmu px-0">
          <h1 className="homeHeading-module__heading--ENz5x headline-module__h1--vBIBM -mb-4">
            Покупайте и продавайте в Ташкенте
          </h1>
        </div>
      </section>
      <section className="mt-16 max-w-[1230px] min-h-screen bg-[#FFFFFF] mx-auto ">
        <Filter />
        <div className="mb-8"></div>
        <UsefulCards />
        <div></div>
        <CardsSection />
        <div></div>
        <IntroSection />
        <div></div>
        <CardsSection showTitle={false} />
        <Button />
      </section>
    </>
  );
}
