import React from "react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;

const Navigation = ({ session = null, logoutUrl = null }) => {
  return (
    <div className="flex items-center justify-between bg-black">
      <div className="flex items-center justify-between">
        <img src="/icon-196x196.png" alt="Logo" className="h-8" />
        <div className="p-4">
          <p className="p-2 text-xs font-mono bg-opacity-50 border border-opacity-30 rounded">
            Hello{" "}
            {session?.identity.traits.name
              ? session.identity.traits.name
              : "friend"}
            , great to see you 🤗
          </p>
        </div>
      </div>
      <div className="space-x-8 text-white text-xl">
        <Link className="hover:text-blue-300" href="/">
          Home
        </Link>
        <Link className="hover:text-blue-300" href="/about">
          About
        </Link>
        <Link className="hover:text-blue-300" href="/schedule">
          Schedule
        </Link>
        <Link className="hover:text-blue-300" href="/speakers">
          Speakers
        </Link>
        <Link className="hover:text-blue-300" href="/venue">
          Venue
        </Link>
      </div>
      <div className="hover:text-blue-300">
        <Link
          href={logoutUrl ? basePath + "/ui/settings" : basePath + "/ui/login"}
          className="p-2 md:p-4"
        >
          {session ? "Settings" : "Login"}
        </Link>
      </div>
      <div>
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
    </div>
  );
};

export default Navigation;
