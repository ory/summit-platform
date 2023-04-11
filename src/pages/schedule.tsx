import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TalkCard from "@/components/TalkCard";
import talks from "@/talks.json";
import type { NextPage } from "next";

const Schedule: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-600">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">Schedule</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {talks.map((talk) => (
            <TalkCard key={talk.slug} talk={talk} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
