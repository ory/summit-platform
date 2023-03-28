import React from "react";
import Navbar from "../components/Navbar";
import EmailSignup from "../components/EmailSignup";
import CountdownComponent from "../components/Countdown";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/summit.png)" }}
    >
      <Navbar />
      <main className="flex flex-col flex-grow justify-center px-4 py-8 space-y-8 text-center text-white">
        <h1 className="text-5xl">Ory Summit 2023</h1>
        <h2 className="text-2xl">Date and Place</h2>
        <EmailSignup />
        <CountdownComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
