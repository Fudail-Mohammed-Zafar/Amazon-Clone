import React from "react";
import { ChartNoAxesCombined, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.188 9.458 12.506h-7.406l-5.8-7.584-6.64 7.584H.472l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.04L6.486 3.24H4.298z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Read Blogs", to: "/" },
    { label: "Admin", to: "/admin" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/fudailzafar",
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/fudailzafar",
      Icon: Github,
    },
    { label: "X", href: "https://x.com/fudailzafar", Icon: XLogo },
  ];

  return (
    <footer className="border-t border-[var(--border-soft)] bg-white">
      <div className="mx-auto w-[min(980px,92%)] py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-main)] text-[var(--brand-primary)]">
                <ChartNoAxesCombined className="h-4 w-4" />
              </span>
              <p className="font-display text-xl text-[var(--ink-900)]">StockHub</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
              Practical finance and market insights, written with clarity.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <nav
              aria-label="Footer links"
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="transition hover:text-[var(--brand-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-main)] text-[var(--ink-muted)] transition hover:bg-[var(--brand-primary)] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border-soft)] pt-4 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} StockHub. All rights reserved.</p>
          <p>Less noise. Better decisions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
