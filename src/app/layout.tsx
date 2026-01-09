import '../styles/output.css'
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bahadir",
  description: "bahadir's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="07aV/zg42lsXMJcbKNryeA"
          strategy="afterInteractive"
        />
      </head>
      <body className={cairo.className}>
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
