// SiteFooter — contact + socials. Inline SVG icons, theme-aware via tokens,
// CSS hover (no JS), so this stays a server component.

const iconClass = "h-[18px] w-[18px] shrink-0";

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M21.944 3.076a1.5 1.5 0 0 0-1.538-.21L2.5 10.38a1.5 1.5 0 0 0 .09 2.79l4.13 1.37 1.56 4.69a1.5 1.5 0 0 0 2.56.46l2.23-2.67 4.35 3.19a1.5 1.5 0 0 0 2.34-1.01l2-14.5a1.5 1.5 0 0 0-.77-1.62zM9.4 13.88l8.7-5.35-7.05 6.6-.25 3.32-1.4-4.57z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 py-1 font-mono text-xs tracking-wide text-ash transition-colors hover:text-alabaster"
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="mt-24 border-t border-line/60 pt-14 pb-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-sans text-base font-medium tracking-tight text-alabaster">
            get in touch
          </h2>
          <span className="font-mono text-[0.6875rem] tracking-wide text-muted">
            Istanbul
          </span>
        </div>

        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-4">
          <SocialLink href="mailto:bahadircan.bc@gmail.com" label="Email Bahadır Can">
            <IconEmail />
            <span>bahadircan.bc@gmail.com</span>
          </SocialLink>
          <SocialLink href="https://t.me/bbahadircan" label="Bahadır Can on Telegram">
            <IconTelegram />
            <span>telegram</span>
          </SocialLink>
          <SocialLink href="https://twitter.com/BahadirCaan" label="Bahadır Can on X">
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

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line/40 pt-6">
          <span className="font-mono text-[0.6875rem] tracking-wide text-muted">
            Bahadır Can — built with Next.js
          </span>
          <span className="font-mono text-[0.6875rem] tracking-wide text-muted">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
