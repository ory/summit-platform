import React from "react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_ORY_SDK_URL;

const Navigation = ({ session = null, logoutUrl = null }) => {
  return (
    <div className="flex items-center justify-between bg-black p-4">
      <div className="flex items-center">
        <img src="/icon-196x196.png" alt="Logo" className="h-8" />
      </div>
      <div className="space-x-8 text-white text-xl">
        <Link className="hover:text-blue-300" href="/">
          Get your Ticket
        </Link>
        <Link className="hover:text-blue-300" href="/about">
          About
        </Link>
        <span className="hover:text-blue-300" href="/">
          Schedule & Speakers coming soon
        </span>
      </div>
      <div>
        {logoutUrl && (
          <div>
            <Link href={logoutUrl}>Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
