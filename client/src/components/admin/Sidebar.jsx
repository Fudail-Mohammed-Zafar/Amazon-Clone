import { CirclePlus, House, MessageCircleMore, TableProperties } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
      <NavLink
        end={true}
        to={"/admin"}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <House size={20} />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink
        end={true}
        to={"/admin/addBlog"}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <CirclePlus size={20} />
        <p className="hidden md:inline-block">Add Blogs</p>
      </NavLink>

      <NavLink
        end={true}
        to={"/admin/listBlog"}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <TableProperties size={20} />
        <p className="hidden md:inline-block">Blog lists</p>
      </NavLink>

      <NavLink
        end={true}
        to={"/admin/comments"}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <MessageCircleMore size={20} />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
