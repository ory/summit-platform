import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500">
      <div>
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="hidden md:flex space-x-4 text-white">
        <a className="hover:text-blue-300" href="/">
          Home
        </a>
        <a className="hover:text-blue-300" href="/about">
          About
        </a>
        <a className="hover:text-blue-300" href="/schedule">
          Schedule
        </a>
        <a className="hover:text-blue-300" href="/speakers">
          Speakers
        </a>
        <a className="hover:text-blue-300" href="/venue">
          Venue
        </a>
      </div>
      <div>
        <a
          href="https://github.com/ory"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
