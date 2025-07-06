import React from "react";
import Logo from "../assets/favicon.ico";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <div className="flex flex-row justify-center items-center gap-1 md:gap-3">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt="logo"
          className="w-8 sm:w-12 cursor-pointer"
        />
        <p className="font-semibold text-lg md:text-2xl">StockHub</p>
      </div>
      <button
        onClick={() => navigate("/admin")}
        className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
      >
        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <FaArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
        </span>
        <span>{token ? "Dashboard" : "Admin"}</span>
      </button>
    </div>
  );
};

export default Navbar;
