import { Outlet } from "react-router-dom";
import { useAppContext } from "@/context/useAppContext";
import Sidebar from "@/components/admin/Sidebar";
import { ChartNoAxesCombined, LogOut, ShieldCheck } from "lucide-react";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    setToken(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--surface-main)]">
      <header className="ui-animate-fade-down sticky top-0 z-20 border-b border-[var(--border-soft)] bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-[min(1240px,94%)] items-center justify-between gap-2 py-2 sm:gap-3 sm:py-3">
          <button
            onClick={() => navigate("/")}
            className="flex min-w-0 items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-[var(--brand-accent-soft)] sm:gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-white sm:h-10 sm:w-10">
              <ChartNoAxesCombined className="h-5 w-5" />
            </span>
            <div className="min-w-0 text-left">
              <p className="font-display truncate text-sm text-[var(--ink-900)] sm:text-lg">
                <span className="sm:hidden">Admin</span>
                <span className="hidden sm:inline">StockHub Admin</span>
              </p>
            </div>
          </button>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-3 py-1 text-xs font-semibold text-[var(--ink-muted)] lg:inline-flex">
              <ShieldCheck className="h-4 w-4 text-[var(--brand-primary)]" />
              Secure session
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1 rounded-xl bg-[var(--brand-primary)] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_10px_20px_rgba(15,76,92,0.25)] sm:gap-2 sm:px-4 sm:text-sm"
            >
              <LogOut className="h-4 w-4" />
              <span className="sm:hidden">Exit</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className="ui-animate-fade-up mx-auto grid w-[min(1240px,94%)] gap-5 py-5 md:grid-cols-[240px_1fr] lg:gap-6"
        style={{ animationDelay: "80ms" }}
      >
        <aside
          className="ui-animate-fade-left md:sticky md:top-[90px] md:h-fit"
          style={{ animationDelay: "160ms" }}
        >
          <Sidebar />
        </aside>
        <main
          className="ui-animate-fade-right min-w-0 rounded-3xl border border-[var(--border-soft)] bg-white shadow-[0_14px_34px_rgba(9,30,66,0.08)]"
          style={{ animationDelay: "200ms" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
