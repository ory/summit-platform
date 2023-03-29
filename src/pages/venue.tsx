import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Venue = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">Venue</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          ipsum quis nisi placerat, quis suscipit justo lobortis. Maecenas
          ultricies tortor in turpis bibendum, id eleifend nisi accumsan.
        </p>
        <div className="mt-4">
          <img
            src="/venue/office1.jpg"
            alt="Venue"
            className="w-full h-48 object-cover mb-4"
          />
          <img
            src="/venue/office2.jpg"
            alt="Venue"
            className="w-full h-48 object-cover mb-4"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Venue;
