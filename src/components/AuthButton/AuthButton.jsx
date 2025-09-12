import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { getStorage, redirectToAuthPage } from "../../utils/utils";
import { Link } from "react-router-dom";

export default function AuthButton() {
  const token = getStorage("JWT", true);
  if (token) {
    return (
      <>
        <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
          <IoPersonAddOutline
            size={"18px"}
            className="text-[#A7AFBC] cursor-pointer"
          />
          <span className="button-module__buttonChildren--hvRdH">Profil</span>
        </Link>
      </>
    );
  }

  return (
    <button
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => redirectToAuthPage()}
    >
      <IoPersonAddOutline
        size={"18px"}
        className="text-[#A7AFBC] cursor-pointer"
      />
      <span className="button-module__buttonChildren--hvRdH">
        Tizimga kirish
      </span>
    </button>
  );
}
