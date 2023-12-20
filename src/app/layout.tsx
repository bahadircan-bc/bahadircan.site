import '../styles/output.css'
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getBlogData, getProjectData } from '@/db/dbReq';

const cairo = Cairo({ subsets: ["latin"] });

export const preload = () => {
  void getProjectData();
  void getBlogData();
}

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
