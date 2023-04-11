import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";
import TicketCard from "@/components/TicketCard";
import { NextPage } from "next";

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

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="p-2 border-2 border-gray-400 focus:border-blue-500"
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inPerson}
                    onChange={(e) => setInPerson(e.target.checked)}
                    className="w-4 h-4 text-blue-500"
                  />
                  <label htmlFor="inPerson" className="ml-2">
                    I want to attend the event in person
                  </label>
                </div>

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
            </main>
            <Footer />
          </div>
        </Auth>
      </AuthContext.Provider>
    </>
  );
};

export default Ticket;
