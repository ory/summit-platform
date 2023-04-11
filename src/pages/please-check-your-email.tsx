import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NextPage } from "next";

const CheckEmail: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">
          Please check your email for a link to login with!
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default CheckEmail;
