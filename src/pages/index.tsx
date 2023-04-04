import React from "react";
import Navigation from "@/components/Navigation";
import EmailSignup from "@/components/EmailSignup";
import CountdownComponent from "@/components/Countdown";
import Footer from "@/components/Footer";
import useToSession from "@/hooks/useToSession";

const Home = () => {
  //const user = useToSession();
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/summit.png)" }}
    >
      <Navigation />
      <main className="flex flex-col flex-grow justify-center px-4 py-8 space-y-8 text-center text-white">
        <h1 className="text-5xl shadow-outline">Ory Summit 2023</h1>
        <h2 className="text-2xl">09.11.2023 - Munich, Germany</h2>
        <EmailSignup />
        <CountdownComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
