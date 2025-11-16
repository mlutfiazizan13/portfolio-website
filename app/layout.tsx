"use client";


import { ReactNode } from "react";
import Navbar from "./components/navbar";
import './globals.css';
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <html lang="en" className={outfit.className}>
      <body>
        <div id="page-container" className="relative min-h-screen bg-white">
            <Navbar />

            <div
              id="content-wrap"
              className="pt-[90px] pb-20 lg:ml-[90px] lg:w-[calc(100%-90px)]"
            >
              {children}
            </div>

            <footer id="footer" className="absolute bottom-0 w-full">
              {/* <Footer /> */}
            </footer>

            {/* Scroll To Top Button */}
            <div
              onClick={scrollToTop}
              className="fixed flex justify-center items-center text-2xl text-white right-0 bottom-0 w-[90px] h-[90px] bg-[#323443] border-l-[0.1px] border-gray-700 cursor-pointer"
            >
              {/* <FontAwesomeIcon icon={faArrowUp} /> */}
            </div>
          </div>
      </body>
    </html>
  );
}
