import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/contexts/AuthContext";
import Auth from "@/components/Auth";

const Venue = () => {
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
              <h1 className="text-4xl mb-4">Venue</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor ipsum quis nisi placerat, quis suscipit justo lobortis.
                Maecenas ultricies tortor in turpis bibendum, id eleifend nisi
                accumsan.
              </p>
              <div className="mt-4">
                <img
                  src="/venue/office1.jpg"
                  alt="Venue"
                  className="w-full h-48 object-cover mb-4"
                />
                <img
                  src="/venue/office2.jpg"
                  alt="Venue"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </main>
            <Footer />
          </div>
        </Auth>
      </AuthContext.Provider>
    </>
  );
};

export default Venue;
