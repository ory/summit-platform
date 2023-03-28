import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-black">
        <div style={inter.style}>
          <div className="p-0 m-auto max-w-5xl w-screen overflow-x-hidden text-inherit box-border text-gray-200 ">
            <main className="flex flex-col py-24 min-h-screen">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
