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

const OG_DESCRIPTION =
  "R&D engineer building robotics & autonomy — LiDAR-inertial SLAM, sensor fusion, and AI vision, from electrons to interface.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bahadircan.site"),
  title: "Bahadır Can — R&D Engineer",
  description:
    "Bahadır Can — R&D engineer. From electrons to interface: robotics, AI cameras & computer vision, web & web3.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bahadircan.site",
    siteName: "Bahadır Can",
    title: "Bahadır Can — R&D Engineer",
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bahadır Can — R&D Engineer. From electrons to interface.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahadır Can — R&D Engineer",
    description: OG_DESCRIPTION,
    creator: "@BahadirCaan",
    images: ["/og.png"],
  },
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
