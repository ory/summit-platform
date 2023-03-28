import { Session } from "@ory/client";

export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  description: string;
  price: number;
}

export interface AuthContextValue {
  session: Session;
  logoutUrl: string;
  isAuthenticated: boolean;
}
