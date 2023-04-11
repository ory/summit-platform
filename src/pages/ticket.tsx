import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";
import TicketCard from "@/components/TicketCard";

const Ticket = () => {
  const user = useAuth();
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
            </main>
            <Footer />
          </div>
        </Auth>
      </AuthContext.Provider>
    </>
  );
};

export default Ticket;
