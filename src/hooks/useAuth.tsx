import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Session } from "@ory/client";
import ory from "../pkg/sdk";

const useAuth = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session>();
  const [logoutUrl, setLogoutUrl] = useState<string>();
  const isAuthenticated = !!session;

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await ory.toSession();
        setSession(response.data);
        ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url);
        });
      } catch {
        router.push("./");
      }
    };
    fetchSession();
  }, [router]);

  return { session, logoutUrl, isAuthenticated };
};

export default useAuth;
