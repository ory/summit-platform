import React from "react";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Auth = ({ children }) => {
  const { isAuthenticated, logoutUrl, session } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <>
          <div>{React.cloneElement(children, { session, logoutUrl })}</div>
        </>
      ) : (
        <h1 className="bg-black m-auto">Loading 🫠</h1>
      )}
    </>
  );
};

export default Auth;
