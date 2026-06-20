import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bahadircan.site"),
  title: "Bahadır Can — R&D Engineer",
  description:
    "Bahadır Can — R&D engineer. From electrons to interface: robotics, AI cameras & computer vision, web & web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved/system theme before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: light)').matches;if(t==='light'||(!t&&m)){document.documentElement.classList.add('light');}}catch(e){}})();",
          }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="07aV/zg42lsXMJcbKNryeA"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
