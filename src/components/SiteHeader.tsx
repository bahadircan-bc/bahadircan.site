"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
          ? "bg-obsidian/85 backdrop-blur-md border-muted/20"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Bahadır Can — home"
          className="font-sans text-[0.9375rem] font-medium tracking-tight text-alabaster"
        >
          Bahadır Can
        </Link>

        <nav aria-label="Site navigation">
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
                className="border-b border-muted/40 pb-px text-ash transition-colors hover:border-alabaster/50 hover:text-alabaster"
              >
                cv&nbsp;↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
