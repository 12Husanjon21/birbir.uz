import React from "react";
import UsefulCards from "../../components/QulaySection/QulaySection";
import CardsSection from "../../components/CardsSection/CardsSection";
import IntroSection from "../../components/introSection/introSection";
import Button from "../../components/Buttons/Buttons";

export default function HomePage() {
  return (
    <>
      <section className="mt-16 max-w-[1230px] min-h-screen bg-[#FFFFFF] mx-auto ">
        <div></div>
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
