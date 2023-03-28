import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import talks from "../talks.json";

const TalkPage = ({ talk }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">{talk.speaker}</h1>
        <img
          src={`/speakers/${talk.slug}.png`}
          alt={talk.speaker}
          className="w-full h-48 object-cover mb-4"
        />
        <p>{talk.synopsis}</p>
      </main>
      <Footer />
    </div>
  );
};

export default TalkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = talks.map((talk) => ({ params: { slug: talk.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const talk = talks.find((talk) => talk.slug === params.slug);
  return { props: { talk } };
};
