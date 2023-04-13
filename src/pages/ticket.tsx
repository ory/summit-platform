import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";
import TicketCard from "@/components/TicketCard";
import type { NextPage } from "next";
import Link from "next/link";

const Ticket: NextPage = () => {
  const user = useAuth();
  const [name, setName] = useState("");
  const [inPerson, setInPerson] = useState(false);
  const [submitting] = useState(false);
  return (
    <>
      <AuthContext.Provider
        value={{
          session: user.session,
          logoutUrl: user.logoutUrl,
          isAuthenticated: user.isAuthenticated,
        }}
      >
        <Auth>
          <div className="flex flex-col min-h-screen">
            <Navigation session={user.session} logoutUrl={user.logoutUrl} />
            <main className="flex-grow p-4">
              <h1 className="text-4xl mb-4">Your Ticket</h1>
              <TicketCard session={user.session} />
              <h2>Do you want to attend the event in person?</h2>
              <p>
                Please sign up here if you want to attend in person. No further
                sign up is needed to watch the livestream.
              </p>
              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="p-2 border-2 border-gray-400 focus:border-blue-500"
                />

                {inPerson && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="p-2 border-2 border-gray-400 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      className="p-2 border-2 border-gray-400 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      name="source"
                      placeholder="How did you learn about us?"
                      className="p-2 border-2 border-gray-400 focus:border-blue-500"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="p-2 bg-blue-500 text-white hover:bg-blue-400"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
              <div>
                <Link className="hover:text-blue-300" href="/venue">
                  Learn more about the venue
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        </Auth>
      </AuthContext.Provider>
    </>
  );
};

export default Ticket;
