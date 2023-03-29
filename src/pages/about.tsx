import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">About Ory Summit 2023</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          ipsum quis nisi placerat, quis suscipit justo lobortis. Maecenas
          ultricies tortor in turpis bibendum, id eleifend nisi accumsan.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
