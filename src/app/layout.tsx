import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
