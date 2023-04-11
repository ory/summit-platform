import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";

const Ticket = () => {
  const user = useAuth();
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
          </main>
          <Footer />
        </Auth>
      </AuthContext.Provider>
    </div>
  );
};

export default Ticket;
