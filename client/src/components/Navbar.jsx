import { useAppContext } from "@/context/useAppContext";
import { ChartNoAxesCombined } from "lucide-react";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="pt-5 sm:pt-7">
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-white/75 px-4 py-3 shadow-[0_8px_24px_rgba(9,30,66,0.08)] backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-accent-soft)] text-[var(--brand-primary)] transition hover:scale-[1.02] hover:bg-[var(--brand-accent)] hover:text-white"
          >
            <ChartNoAxesCombined className="h-5 w-5" />
          </button>

          <div className="leading-tight">
            <p className="font-display text-lg text-[var(--ink-900)] sm:text-xl">
              StockHub
            </p>
            <p className="hidden text-xs tracking-[0.16em] text-[var(--ink-muted)] sm:block">
              MARKETS MADE HUMAN
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/admin")}
          className="rounded-xl border border-[var(--brand-primary)] bg-[var(--brand-primary)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_8px_20px_rgba(15,76,92,0.25)] sm:px-5 sm:text-base"
        >
          {token ? "Dashboard" : "Admin Panel"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
