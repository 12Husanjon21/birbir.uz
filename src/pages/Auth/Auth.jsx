import React from "react";
import { redirectToAuthPage } from "../../utils/utils";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <button
          onClick={() => redirectToAuthPage()}
          className="bg-[#1d84ff] text-white cursor-pointer py-4 px-5 rounded-[18px] hover:bg-[#4c5e7c] transition-colors duration-300"
        >
          Sign in or sign up via telegram
        </button>
      </div>
    </div>
  );
}
