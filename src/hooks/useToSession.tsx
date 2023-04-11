import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Configuration, FrontendApi, Session } from "@ory/client";

const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;

const ory = new FrontendApi(
  new Configuration({
    basePath: basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

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
