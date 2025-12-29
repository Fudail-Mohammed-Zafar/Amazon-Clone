import { useAppContext } from "@/context/useAppContext";
import { ChartNoAxesCombined } from "lucide-react";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <div className="flex flex-row justify-center items-center gap-1 md:gap-3">
        <ChartNoAxesCombined onClick={() => navigate("/")} className="w-8 sm:w-12 cursor-pointer" />
        <p className="font-semibold text-lg md:text-2xl">StockHub</p>
      </div>
      <button
        onClick={() => navigate("/admin")}
        className="group flex justify-center hover:cursor-pointer h-10 items-center gap-2 rounded-lg bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white active:bg-neutral-700"
      >
        <span>{token ? "Dashboard" : "Admin"}</span>
      </button>
    </div>
  );
};

export default Navbar;
