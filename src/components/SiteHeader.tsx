"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const isLight = document.documentElement.classList.toggle("light");
    setLight(isLight);
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Dark" : "Light"}
      className="text-ash transition-colors hover:text-alabaster"
    >
      {light ? (
        // sun
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      ) : (
        // moon
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300",
        "border-b",
        scrolled
          ? "bg-obsidian/85 backdrop-blur-md border-line/50"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" aria-label="Home" className="sr-only">
          Home
        </Link>

        <nav aria-label="Site navigation" className="ml-auto">
          <ul className="flex items-center gap-5 font-mono text-xs tracking-wide sm:gap-6">
            <li className="hidden sm:block">
              <a
                href="#work"
                className="text-ash transition-colors hover:text-alabaster"
              >
                work
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#contact"
                className="text-ash transition-colors hover:text-alabaster"
              >
                contact
              </a>
            </li>
            <li>
              <a
                href="/cv_bahadircan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV in new tab"
                className="border-b border-line/60 pb-px text-ash transition-colors hover:border-alabaster/50 hover:text-alabaster"
              >
                cv&nbsp;↗
              </a>
            </li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
