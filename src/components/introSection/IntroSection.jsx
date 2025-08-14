import React from "react";

export default function IntroSection() {
  return (
    <section className="max-w-[1230px]  mx-auto bxl:px-0 px-8 mb-[100px]">
      <div className="w-full bg-[#BD007D] rounded-[35px] md:h-[470px] h-[400px] ">
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-6 -gap-x-24 px-14 ">
          {/* Phone image */}
          <img
            src="https://file.birbir.uz/web/frontend/phone-lg-uz.png"
            alt="Phone"
            className="lg:max-w-[480px] max-w-[350px] w-full md:h-[535px] h-[400px]  relative md:bottom-0 lg:bottom-16 bottom-24"
          />

          {/* Text + QR + Buttons */}
          <div className="md:flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src="https://placehold.co/200x200"
              alt="QR"
              className="rounded-2xl mt-2 md:flex hidden max-w-[200px] w-full"
            />
            <div className="text-white text-[28px] lg:text-[32px] leading-snug mt-5 font-bold">
              Ilovani yuklab oling,
              <br /> #BirBirimizga <br /> qo‘shiling
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className=" outline-1 outline-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-[#BD007D] transition">
                AppStore
              </button>
              <button className=" outline-1 outline-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-[#BD007D] transition">
                Play Market
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
