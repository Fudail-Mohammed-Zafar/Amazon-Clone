import { Outlet } from "react-router-dom";
import { useAppContext } from "@/context/useAppContext";
import Sidebar from "@/components/admin/Sidebar";
import { ChartNoAxesCombined } from "lucide-react";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <ChartNoAxesCombined onClick={() => navigate("/")} className="cursor-pointer" />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-md cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
