import {
  CirclePlus,
  House,
  MessageCircleMore,
  TableProperties,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: House, end: true },
  { to: "/admin/addBlog", label: "Add Blog", icon: CirclePlus, end: true },
  { to: "/admin/listBlog", label: "Blog List", icon: TableProperties, end: true },
  { to: "/admin/comments", label: "Comments", icon: MessageCircleMore, end: true },
];

const Sidebar = () => {
  return (
    <nav
      className="rounded-2xl border border-[var(--border-soft)] bg-white p-2 shadow-[0_10px_24px_rgba(9,30,66,0.07)]"
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-1">
        {navItems.map(({ to, label, icon: Icon, end }, index) => (
          <NavLink
            key={to}
            end={end}
            to={to}
            style={{ animationDelay: `${100 + index * 55}ms` }}
            className={({ isActive }) =>
              `ui-animate-fade-up group flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-200 active:scale-[0.98] hover:-translate-y-0.5 sm:px-4 sm:text-sm md:gap-3 ${
                isActive
                  ? "bg-[var(--brand-primary)] text-white shadow-[0_10px_18px_rgba(15,76,92,0.24)]"
                  : "text-[var(--ink-muted)] hover:bg-[var(--brand-accent-soft)] hover:text-[var(--ink-900)]"
              }`
            }
          >
            <Icon className="h-4 w-4" />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
