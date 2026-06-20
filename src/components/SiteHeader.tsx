"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(28,28,26,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(110,114,117,0.18)" : "1px solid transparent",
        transition: "background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Name — left */}
        <Link
          href="/"
          style={{
            color: "#EAE6DF",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            textDecoration: "none",
            lineHeight: 1,
          }}
          aria-label="Bahadır Can — home"
        >
          Bahadır Can
        </Link>

        {/* Nav — right */}
        <nav aria-label="Site navigation">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="#work"
                style={{
                  color: "#8A8882",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#EAE6DF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8A8882";
                }}
              >
                work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{
                  color: "#8A8882",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#EAE6DF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8A8882";
                }}
              >
                contact
              </a>
            </li>
            <li>
              <a
                href="/cv_bahadircan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#8A8882",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  borderBottom: "1px solid rgba(110,114,117,0.35)",
                  paddingBottom: "1px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#EAE6DF";
                  el.style.borderBottomColor = "rgba(234,230,223,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#8A8882";
                  el.style.borderBottomColor = "rgba(110,114,117,0.35)";
                }}
                aria-label="Open CV in new tab"
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
