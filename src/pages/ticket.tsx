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
  const email = user?.session?.identity?.traits?.email;
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Create an object with the data to send
    const formData = {
      email,
      name,
      company,
      title,
    };

    // Make a POST request to the Zapier webhook URL with the form data
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/9251446/337lifu/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success
        console.log("Form data sent successfully.");
      } else {
        // Handle error
        console.error("Failed to send form data.");
      }
    } catch (error) {
      // Handle error
      console.error("Failed to send form data.", error);
    }

    setSubmitting(false);
  };
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
            <Navigation logoutUrl={user.logoutUrl} />
            <main className="p-4 max-w-2xl space-x-8 m-auto">
              <h1 className="text-4xl mb-4">Your Ticket</h1>
              <TicketCard session={user.session} />
              <p className="text-lg">
                Attend Ory Summit 2023 at the Ory office in Munich, Germany!
              </p>
              <p>
                Please sign up here if you want to attend in person at the Ory
                office.
              </p>
              <p>No further sign up is needed to watch the livestream.</p>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="p-2 border-2 border-gray-400 focus:border-blue-500 block"
                />
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="p-2 border-2 border-gray-400 focus:border-blue-500 block"
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="p-2 border-2 border-gray-400 focus:border-blue-500 block"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="p-2 bg-blue-500 text-white hover:bg-blue-400 block"
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
