import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { NextPage } from "next";
import Link from "next/link";
import YouTubeVideo from "@/components/YoutubeVideo";
import useToSession from "@/hooks/useToSession";

const About: NextPage = () => {
  const user = useToSession();
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation logoutUrl={user.logoutUrl} />
      <main className="p-4 max-w-2xl space-x-8 m-auto">
        <p className="text-4xl mb-4">Ory Summit 2023</p>
        <p className="text-xl ">Save the date: November 9, 2023</p>
        <br />
        <p className="mb-4">
          Ory Summit is a global, hybrid conference around open source and zero
          trust based end-to-end identity management and API security solutions.
        </p>
        <p>
          Its theme: &quot;Securing the digital world&quot;. Topics are focused
          on but not limited to cloud authentication and authorization,
          distributed access control, risk management and security best
          practices.
        </p>
        <p>
          Building on the growing popularity Ory Summit is going to take place
          for the third time at the House of Communication in Munich&apos;s
          trendy Werksviertel and online on 9 November 2023.
        </p>
        <br />
        <p>
          Requests for proposals can be submitted{" "}
          <Link
            className="hover:text-blue-300 text-blue-500"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYt-jELjwCdW219Q8QonfTR4wYkTLZLNIcK8tKPoHJS4DMgw/viewform?usp=sf_link"
          >
            here
          </Link>{" "}
          until Sunday, May 28, 2023.
        </p>
        <p>
          For inquiries please contact{" "}
          <Link
            className="hover:text-blue-300 text-blue-500"
            href="mailto:office@ory.sh"
          >
            office@ory.sh
          </Link>
        </p>{" "}
        <br />
        <YouTubeVideo />
        <p>
          Presentations and videos of last year&apos;s speeches can be found{" "}
          {""}
          <Link
            className="hover:text-blue-300 text-blue-500"
            href="https://www.ory.sh/summit/2022/"
          >
            here
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
