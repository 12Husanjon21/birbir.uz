import React from "react";
import { IoClose, IoChevronForward } from "react-icons/io5";
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaLinkedin,
  FaUser,
  FaHeart,
  FaComments,
  FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Menu({ open, setOpen }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 " />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-screen px-6 bg-white shadow-lg transform transition-transform duration-150 z-50 
        ${open ? "translate-x-0 min-h-[670px]" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end pt-[10px] px-[18px] -mr-2 ">
          <button
            onClick={() => setOpen(false)}
            className="p-[12px] rounded-xl cursor-pointer bg-[#F5F6F7]"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start gap-y-[24px] p-6 text-lg font-semibold">
          <button
            className="cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            Asosiy
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigate("/announce")}
          >
            E'lon qo‘yish
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigate("/aboutus")}
          >
            Biz haqimizda
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigate("/rules")}
          >
            Platforma qoidalari
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigate("/support")}
          >
            Qo‘llab-quvvatlash
          </button>
        </div>

        {/* Bottom part */}
        <div className="absolute bottom-6 left-0 w-full px-6 gap-6">
          {[
            { icon: <FaUser />, text: "Profilga kirish", to: "/profile" },
            { icon: <FaHeart />, text: "Sevimlilar", to: "/favourites" },
            { icon: <FaComments />, text: "Chat BirBir", to: "/chat" },
            { icon: <FaGlobe />, text: "O‘zbekcha", to: "/" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(item.to)}
              className="flex items-center cursor-pointer border-b-[1px] border-gray-400 justify-between w-full py-3 px-3 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3 text-gray-700 text-[15px]">
                <span className="p-2 bg-gray-100 rounded-lg text-gray-500 text-lg">
                  {item.icon}
                </span>
                {item.text}
              </div>
              <IoChevronForward className="text-gray-400" />
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 mt-12 pb-8 pl-4 text-gray-600 text-xl">
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaTelegramPlane size={24} />
            </a>
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="#">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
