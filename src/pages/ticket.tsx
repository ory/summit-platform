import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";
import TicketCard from "@/components/TicketCard";

const Ticket = () => {
  const user = useAuth();
  const [name, setName] = useState("");
  const [inPerson, setInPerson] = useState(false);
  const [submitting] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthContext.Provider
        value={{
          session: user.session,
          logoutUrl: user.logoutUrl,
          isAuthenticated: user.isAuthenticated,
        }}
      >
        <Auth>
          <Navigation session={user.session} logoutUrl={user.logoutUrl} />
          <main className="flex-grow p-4">
            <h1 className="text-4xl mb-4">Your Ticket</h1>
            <TicketCard session={user.session} />
          </main>
          <Footer />
        </Auth>
      </AuthContext.Provider>
    </div>
  );
};

export default Ticket;
