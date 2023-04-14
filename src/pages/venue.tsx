import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Venue: NextPage = () => {
  return (
    <>
      <Navigation />
      <main className="p-4 max-w-2xl space-x-8 m-auto">
        <p className="text-4xl mb-4">Venue</p>
        <p>
          Attend the Ory Summit in person in one of Europe&apos;s emerging tech
          hubs: Munich!
        </p>
        <br />
        <p>
          The event is hosted at the Ory Germany Headquarters in the House of
          Communication in Munichs trendy Werksviertel right next to the
          Ostbahnhof (Munich East) train station.
        </p>
        <br />
        <div>
          <ul>
            <p>House of Communication</p>
            <p>August-Everding-Straße 25</p>
            <p>81671 Munich Germany</p>
          </ul>
          <br />

          <p>
            <Link
              className="hover:text-blue-300 text-blue-500 text-xl"
              href="https://www.google.com/maps/place/August-Everding-Stra%C3%9Fe+25,+81671+M%C3%BCnchen/"
            >
              Location on Google Maps
            </Link>
          </p>
          <br />
          <p>5-minute walk from Munich East train station.</p>
          <p>
            8 minutes by underground tram/S-Bahn train from Munich Central
            Station.
          </p>
          <p>
            approx. 30 minutes by S-Bahn (city commuter train) from Munich
            Airport.
          </p>
          <p>2 minutes by car from the Mittlerer Ring ring road. </p>
        </div>
        <br />
        <div className="flex">
          <div>
            <Image
              className="rounded-xl"
              width={500}
              height={500}
              src="/venue/office1.png"
              alt="House of Communication building"
            />
          </div>
          <div>
            <Image
              className="rounded-xl"
              width={500}
              height={500}
              src="/venue/office2.png"
              alt="House of Communication building"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Venue;
