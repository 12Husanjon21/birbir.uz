import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AiFillZhihuCircle } from "react-icons/ai";
import { IoAddCircle, IoPersonOutline, IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";
import Menu from "../../components/MobileMenu/Menu";
import { AuthButton } from "../../components";
import logo from "../../assets/images/Toparmongreen.png";

export default function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/announce");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
        setShowMenu(false);
      } else {
        setIsSticky(false);
        setShowMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-transparent transition-all duration-300 z-50 ${
          isSticky ? "fixed top-0 left-0" : "pt-6"
        }`}
      >
        <div className="max-w-[1235px]  mx-auto flex-col justify-between xl:px-0 px-6 items-center gap-[8px]">
          {/* Top Row */}
          <div className="flex bg-white justify-between items-center max-w-full pr-2 py-3">
            {/* Left Section */}
            {isSticky ? (
              <div className="flex items-center gap-[30px]">
                <div>
                  <div
                    className={` ${
                      isSticky ? "behider" : ""
                    } flex items-center`}
                  >
                    <Link
                      to={"/"}
                      className="text-[38px] font-semibold hide xl:ml-0 ml-5"
                    >
                      <img
                        src={logo}
                        alt="logo"
                        className="max-w-[120px] max-h-[30px]"
                      />
                    </Link>
                  </div>
                </div>
                {/* Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-[12px] flex cursor-pointer transition-colors duration-300 rounded-xl ${
                    isOpen
                      ? "bg-[#26A560] text-white"
                      : "bg-[#F5F6F7] text-black"
                  }`}
                >
                  {isOpen ? <IoClose size={22} /> : <CgMenuLeft size={24} />}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-[20px]">
                <Link to={"/"} className="text-[38px] font-semibold ">
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-[120px] max-h-[30px]"
                  />
                </Link>
                <button className="hidden md:flex behided cursor-pointer transition-colors duration-300 gap-x-2 items-center">
                  <FaLocationArrow size={20} className="text-gray-400" />
                  <p className="text-gray-400  hover:text-black transition-colors duration-300">
                    Barcha hududlar
                  </p>
                </button>
              </div>
            )}

            {/* Middle Section */}
            {isSticky ? (
              <div className="flex-1 flex items-center justify-between bg-[#F5F6F7] rounded-xl p-[5px] pl-4 overflow-hidden mx-2">
                <input
                  type="text"
                  placeholder="iPhone 15 Pro topish"
                  className=" w-full  bg-transparent  text-[16px] outline-none text-gray-700"
                />
                <button className="bg-[#26A560] cursor-pointer p-[10px]  rounded-xl flex items-center justify-center">
                  <IoIosSearch color="#fff" size={20} />
                </button>
              </div>
            ) : (
              children && (
                <div className="flex-1 flex justify-center">{children}</div>
              )
            )}

            {/* Right Section */}
            <div className="flex items-center justify-between gap-x-2">
              <ul className="flex items-center">
                {/* Show menu if not sticky */}
                <div className="hidden md:flex items-center gap-[20px]">
                  {showMenu && (
                    <>
                      <li className="hover:text-[#26A560] transition-colors duration-300">
                        <Link to={"/aboutus"}>Biz haqimizda</Link>
                      </li>
                      <li className="hover:text-[#26A560] transition-colors duration-300">
                        <Link>Qo'llab-quvvatlash</Link>
                      </li>
                      <li className="flex items-center gap-x-1 cursor-pointer hover:text-[#26A560] transition-colors duration-300">
                        <AiFillZhihuCircle size={"20px"} />
                        <p>UZ</p>
                        <IoIosArrowDown size={"20px"} />
                      </li>
                    </>
                  )}
                </div>

                <div className="hidden md:flex gap-x-4 searcher">
                  <li className="flex items-center gap-x-[4px] ml-6 hover:text-[#26A560] transition-colors duration-300">
                    <IoMdHeartEmpty
                      size={"22px"}
                      className="text-[#A7AFBC] cursor-pointer"
                    />
                    <Link to={"/favourites"}>Sevimlilar</Link>
                  </li>
                  <li className="flex items-center text-[15px] mr-2 gap-x-2 hover:text-[#26A560] transition-colors duration-300">
                    <AuthButton />
                  </li>
                </div>
              </ul>

              {/* Qo‘yish Button */}
              <div className="flex items-center gap-x-2">
                <button
                  onClick={handleClick}
                  className={`bg-[#27383F]  cursor-pointer text-white py-2 px-5 rounded-full hover:bg-[#4c5e7c] transition-colors duration-300 ${
                    isSticky ? "behide" : ""
                  }`}
                >
                  <div className="flex items-center p-1 gap-x-2">
                    <p className="text-[15px]">Qo'yish</p>
                    <IoAddCircle size={"24px"} />
                  </div>
                </button>

                {/* Mobile Menu */}
                <button
                  onClick={() => setOpen(true)}
                  className="p-[10px] rounded-xl bg-[#F5F6F7] hidden max-[1200px]:flex"
                >
                  <LuMenu size={22} />
                </button>
              </div>

              <div className={`hidden max-[1200px]:flex`}>
                <Menu open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>

          {/* Category Menu (dropdown) */}
          {isSticky && (
            <div
              className={`transition-all duration-500 ease-out overflow-hidden ${
                isOpen
                  ? "max-h-[400px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-3"
              }`}
            >
              <CategoryMenu />
            </div>
          )}
        </div>
      </header>
    </>
  );
}
