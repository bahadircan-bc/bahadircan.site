"use client";

// SiteFooter — "The Spatial Stack" design system
// All SVG icons are inline JSX. Colors use design palette directly.

const iconStyle: React.CSSProperties = {
  width: "18px",
  height: "18px",
  flexShrink: 0,
};

// Email icon
function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={iconStyle} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

// Telegram icon
function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
      <path d="M21.944 3.076a1.5 1.5 0 0 0-1.538-.21L2.5 10.38a1.5 1.5 0 0 0 .09 2.79l4.13 1.37 1.56 4.69a1.5 1.5 0 0 0 2.56.46l2.23-2.67 4.35 3.19a1.5 1.5 0 0 0 2.34-1.01l2-14.5a1.5 1.5 0 0 0-.77-1.62zM10.5 16.18l-1.1-3.3 6.9-5.52-5.8 8.82zm1.37.92 4.49-6.81-3.72 4.45-0.77.36zm6.87-1.28-4.24-3.11 5.16-9.4-0.92 12.51z" />
    </svg>
  );
}

// X / Twitter icon
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// GitHub icon
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// LinkedIn icon
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#8A8882",
        textDecoration: "none",
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.01em",
        transition: "color 0.15s ease",
        padding: "4px 0",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#EAE6DF";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#8A8882";
      }}
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid rgba(110,114,117,0.2)",
        marginTop: "6rem",
        paddingTop: "3.5rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Top row — heading + location */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              color: "#EAE6DF",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            get in touch
          </h2>
          <span
            style={{
              color: "#6E7275",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.02em",
            }}
          >
            Istanbul
          </span>
        </div>

        {/* Social links grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem 2rem",
            marginBottom: "3rem",
          }}
        >
          <SocialLink href="mailto:bahadircan.bc@gmail.com" label="Send email to Bahadır Can">
            <IconEmail />
            <span>bahadircan.bc@gmail.com</span>
          </SocialLink>

          <SocialLink href="https://t.me/bbahadircan" label="Bahadır Can on Telegram">
            <IconTelegram />
            <span>telegram</span>
          </SocialLink>

          <SocialLink href="https://twitter.com/BahadirCaan" label="Bahadır Can on X / Twitter">
            <IconX />
            <span>x.com</span>
          </SocialLink>

          <SocialLink href="https://github.com/bahadircan-bc" label="Bahadır Can on GitHub">
            <IconGitHub />
            <span>github</span>
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/bahadır-can/" label="Bahadır Can on LinkedIn">
            <IconLinkedIn />
            <span>linkedin</span>
          </SocialLink>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(110,114,117,0.12)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              color: "#6E7275",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.01em",
            }}
          >
            Bahadır Can — built with Next.js
          </span>
          <span
            style={{
              color: "#6E7275",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.01em",
            }}
          >
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
