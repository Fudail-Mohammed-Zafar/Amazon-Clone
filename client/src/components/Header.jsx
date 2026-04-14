import { useAppContext } from "@/context/useAppContext";
import { ArrowUpRight, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { setInput, input } = useAppContext();
  const [query, setQuery] = useState(input);

  useEffect(() => {
    setQuery(input);
  }, [input]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(query.trim());
  };

  const onClearSearch = () => {
    setInput("");
    setQuery("");
  };

  const onClearInput = () => {
    setQuery("");
    setInput("");
  };

  return (
    <section className="mx-auto w-[min(1120px,92%)] pt-6 sm:pt-10">
      <div className="px-1 pb-2 pt-8 sm:px-6 sm:pb-4 sm:pt-12">

        <div className="relative text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-main)]/80 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--brand-primary)] sm:text-sm">
            <span className="rounded-full bg-[var(--brand-accent)] px-2 py-0.5 text-white">
              LIVE
            </span>
            Weekly market stories that stay practical
            <ArrowUpRight className="h-4 w-4" />
          </div>

          <h1 className="font-display text-4xl leading-tight text-[var(--ink-900)] sm:text-6xl">
            Learn Finance Without
            <span className="block text-[var(--brand-primary)]">The Noise</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            StockHub breaks down market ideas, startup lessons, and money habits
            into short reads you can actually use. Skip the jargon and get
            practical insights every week.
          </p>

          <form
            onSubmit={onSubmitHandler}
            className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-[var(--border-soft)] bg-white p-2 shadow-[0_12px_24px_rgba(9,30,66,0.07)] sm:flex-row"
          >
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for finance, startup, or tech blogs"
                required
                className="h-12 w-full rounded-xl border border-transparent bg-[var(--surface-main)] pl-9 pr-10 text-sm text-[var(--ink-900)] outline-none transition focus:border-[var(--brand-primary)] sm:text-base"
              />

              {query && (
                <button
                  type="button"
                  onClick={onClearInput}
                  aria-label="Clear input"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)] transition hover:text-[var(--ink-900)]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>
            <button
              type="submit"
              className="h-12 rounded-xl bg-[var(--brand-primary)] px-8 text-sm font-semibold text-white transition hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_8px_20px_rgba(15,76,92,0.25)] sm:text-base"
            >
              Search
            </button>
          </form>

          {input && (
            <button
              onClick={onClearSearch}
              className="mt-4 rounded-full border border-[var(--border-soft)] bg-white px-4 py-1.5 text-xs font-semibold text-[var(--ink-muted)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
            >
              Clear search
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
