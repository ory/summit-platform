import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpeakerCard from "@/components/SpeakerCard";
import talks from "@/talks.json";
import type { NextPage } from "next";

const Speakers: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">Speakers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {talks.map((talk) => (
            <SpeakerCard key={talk.slug} talk={talk} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Speakers;
