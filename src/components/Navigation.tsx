import Link from "next/link";
import styles from "@/styles/Home.module.css";

const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;

const Navigation = ({ session = null, logoutUrl = null }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center gap-2">
        <p className="p-4 text-xs font-mono bg-opacity-50 border border-opacity-30 rounded">
          Hello{" "}
          {session?.identity.traits.name
            ? session.identity.traits.name
            : "friend"}
          , great to see you 🤗
        </p>
        <div>
          <Link
            href={
              logoutUrl ? basePath + "/ui/settings" : basePath + "/ui/login"
            }
            className="p-2 md:p-4 bg-transparent border-b border-purple-400"
          >
            {session ? "Settings" : "Login"}
          </Link>
        </div>
        {logoutUrl && (
          <div>
            <Link
              href={logoutUrl}
              className="p-2 md:p-4 bg-transparent border-b border-purple-400"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
