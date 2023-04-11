import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Session } from "@ory/client";
import ory from "../pkg/sdk";

const useToSession = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session>();
  const [logoutUrl, setLogoutUrl] = useState<string>();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await ory.toSession();
        if (response.status === 200 && response.data) {
          // Redirect to /ticket if session exists
          router.push("/ticket");
        } else {
          setSession(response.data);
          ory.createBrowserLogoutFlow().then(({ data }) => {
            setLogoutUrl(data.logout_url);
          });
        }
      } catch (error) {
        console.log("Error fetching session");
      }
    };
    fetchSession();
  }, [router]);

  return { session, logoutUrl };
};

export default useToSession;
