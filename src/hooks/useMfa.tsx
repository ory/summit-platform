import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Configuration, FrontendApi, Session } from "@ory/client";

const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;
const returnToPath = "https://dev.hiddenfood.org/user";
const ory = new FrontendApi(
  new Configuration({
    basePath: basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

const useMfa = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session>();
  const [logoutUrl, setLogoutUrl] = useState<string>();
  const isAuthenticated = !!session;

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await ory.toSession();
        if (response.data.authenticator_assurance_level !== "aal2") {
          router.push(
            basePath +
              "/ui/login?refresh=true&aal=aal2&return_to=" +
              returnToPath
          );
        }
        setSession(response.data);
        ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url);
        });
      } catch {
        router.push(basePath + "/ui/login");
      }
    };
    fetchSession();
  }, [router]);

  return { session, logoutUrl, isAuthenticated };
};

export default useMfa;
