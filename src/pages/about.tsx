import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4 max-w-2xl text-lg space-x-8 ">
        <h1 className="text-4xl mb-4">About Ory Summit 2023</h1>
        <p className="text-xl p-4">
          Hey there! Ready to elevate your digital security game?{" "}
        </p>
        <p className="mb-4">
          Look no further – Ory has got you covered with our free anual
          conference!
        </p>
        <p className="mb-4">
          Set your calendars for November 9, 2023, and join us at the Ory Summit
          2023 for an unforgettable experience, either watching online or live
          at the chic House of Communication in Munich's hip Werksviertel.
        </p>
        <p className="mb-4">
          <h4>Topics include:</h4>
          <ul>
            <li>- Ory use cases</li>
            <li>- Experience with Ory Network</li>
            <li>- Zero trust</li>
            <li>- Identity management</li>
            <li>- Authentication</li>
            <li>- Authorization</li>
            <li>- Cloud security</li>
          </ul>
        </p>
        <p className="mb-4">
          Secure your spot at Ory Summit 2023 and connect with like-minded
          aficionados, learn from the best in the biz, and be part of the
          conversation that's shaping the future of our digital landscape.
        </p>
        <p className="text-xl p-4">
          Enter your email on the{" "}
          <Link className="hover:text-blue-300 text-blue-500" href="/venue">
            main page
          </Link>{" "}
          for your <b>free</b> ticket, and we'll see you there!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
