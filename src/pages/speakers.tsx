import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpeakerCard from "@/components/SpeakerCard";
import talks from "@/talks.json";
import type { NextPage } from "next";
import ComingSoon from "@/components/ComingSoon";

const Speakers: NextPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow p-4">
          <h1 className="text-4xl mb-4">Speakers</h1>
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Speakers;
