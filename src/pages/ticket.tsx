import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Ticket = () => {
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState({ uuid: "your-uuid" });
  const [inPerson, setInPerson] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      // Placeholder: Call the auth service API to add the name to the identity
      await fetch("https://auth-service-api.com/add-name", {
        method: "POST",
        body: JSON.stringify({ uuid: identity.uuid, name }),
        headers: { "Content-Type": "application/json" },
      });

      // Placeholder: Call the CRM service API with the extra form data
      if (inPerson) {
        await fetch("https://crm-service-api.com/add-extra-info", {
          method: "POST",
          body: new URLSearchParams(new FormData(event.target)),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4">Your Ticket</h1>
        <p>Your ticket ID: {identity.uuid}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
  );
};

export default Ticket;
