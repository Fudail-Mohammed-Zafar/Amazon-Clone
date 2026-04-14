import React, { useState } from "react";
import { BellRing } from "lucide-react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("Email subscribed");
    setEmail("");
  };

  return (
    <section className="mx-auto mb-20 w-[min(1120px,92%)]">
      <div className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14">

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-primary)]">
            <BellRing className="h-3.5 w-3.5" />
            Weekly Newsletter
          </span>

          <h2 className="font-display mt-4 text-3xl text-[var(--ink-900)] sm:text-4xl">
            Get calm, useful finance reads every Sunday
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
            One short email with practical ideas from our latest posts. No spam,
            no noise, and you can unsubscribe any time.
          </p>

          <form
            onSubmit={onSubmitHandler}
            className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-xl border border-[var(--border-soft)] bg-white px-4 text-sm text-[var(--ink-900)] outline-none transition focus:border-[var(--brand-primary)] sm:text-base"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-[var(--brand-primary)] px-8 text-sm font-semibold text-white transition hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_8px_18px_rgba(15,76,92,0.24)] sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
