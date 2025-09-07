import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { redirectToAuthPage} from "../../utils/utils";

export default function AuthButton() {

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
