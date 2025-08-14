import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AiFillZhihuCircle } from "react-icons/ai";
import { IoAddCircle } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

export default function Header({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showFullMenu, setShowFullMenu] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/announce");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
        setShowMenu(false);
        setShowFullMenu(false);
      } else {
        setIsSticky(false);
        setShowMenu(true);
        setShowFullMenu(true);
      }

      if (window.scrollY > 680) {
        setShowFullMenu(false);
      } else {
        setShowFullMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-between items-center transition-all duration-300 z-50 ${
        isSticky ? "sticky top-0 bg-white py-[14px]" : "py-[20px]"
      }`}
    >
      <div className="w-[1230px] mx-auto flex justify-between xl:px-0 px-10 items-center gap-[8px]">
        {/* Left section */}
        {isSticky ? (
          <div className="flex items-center gap-[38px]">
            <Link to={"/"} className="text-[37px] font-semibold">
              <p className="text-[#BD007D]">birbir</p>
            </Link>
            <button className="p-[14px] hidden min-[1030px]:flex cursor-pointer hover:text-gray-500 transition-colors duration-300 rounded-2xl bg-[#F5F6F7] ">
              <BiMenuAltLeft size={24} />
            </button>
          </div>
        ) : (
          <Link to={"/"} className="text-[37px] font-semibold">
            <p className="text-[#BD007D]">birbir</p>
          </Link>
        )}

        {/* Middle section */}
        {isSticky ? (
          <div className="flex-1 flex items-center searcher bg-[#F5F6F7] rounded-2xl overflow-hidden">
            <input
              type="text"
              placeholder="iPhone 15 Pro topish"
              className="flex-1 px-4 py-4 bg-transparent text-[18px] outline-none text-sm text-gray-700"
            />
            <button className="bg-[#BD007D] cursor-pointer p-[10px] rounded-xl flex items-center justify-center">
              <IoIosSearch color="#fff" size={22} />
            </button>
          </div>
        ) : (
          children && (
            <div className="flex-1 flex justify-center">{children}</div>
          )
        )}

        {/* Right section */}
        <div className="flex items-center gap-x-4">
          <ul className="flex items-center gap-[20px]">
            {/* showMenu items — faqat 910px dan katta bo‘lsa ko‘rinadi */}
            <div className="hidden lg:flex items-center gap-[20px]">
              {showMenu && (
                <>
                  <li className="hover:text-[#BD007D] transition-colors duration-300">
                    <Link to={"/aboutus"}>Biz haqimizda</Link>
                  </li>
                  <li className="hover:text-[#BD007D] transition-colors duration-300">
                    <Link>Qo'llab-quvvatlash</Link>
                  </li>
                  <li className="flex items-center gap-x-1 cursor-pointer hover:text-[#BD007D] transition-colors duration-300">
                    <AiFillZhihuCircle size={"22px"} />
                    <p>UZ</p>
                    <IoIosArrowDown size={"22px"} />
                  </li>
                </>
              )}
            </div>

            <div className="hidden md:flex">
              {showFullMenu && (
                <>
                  <li className="flex items-center gap-x-[4px] ml-6 hover:text-[#BD007D] transition-colors duration-300">
                    <IoMdHeartEmpty
                      size={"24px"}
                      className="text-[#A7AFBC] cursor-pointer"
                    />
                    <Link to={"/favourites"}>Sevimlilar</Link>
                  </li>
                  <li className="flex items-center text-[15px] gap-x-2 hover:text-[#BD007D] transition-colors duration-300">
                    <IoPersonOutline
                      size={"20px"}
                      className="text-[#A7AFBC] cursor-pointer"
                    />
                    <Link>Tizimga kirish</Link>
                  </li>
                </>
              )}
            </div>
          </ul>

          {/* Qo‘yish button */}
          <div className="flex items-center gap-x-2">
            <button
              onClick={handleClick}
              className="bg-[#27383F] cursor-pointer text-white py-3 px-6 rounded-full hover:bg-[#4c5e7c] transition-colors duration-300"
            >
              <div className="flex items-center gap-x-2">
                <p className="text-[16px]">Qo'yish</p>
                <IoAddCircle size={"26px"} />
              </div>
            </button>

            {/* Hamburger menu — faqat 910px dan kichik bo‘lsa ko‘rinadi */}
            <button className="p-[12px] rounded-xl bg-[#F5F6F7] hidden max-[1030px]:flex">
              <BiMenuAltLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
