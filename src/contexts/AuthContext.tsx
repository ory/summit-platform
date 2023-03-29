import { createContext } from "react";
import { AuthContextValue } from "@/types";

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  logoutUrl: null,
  isAuthenticated: false,
});
