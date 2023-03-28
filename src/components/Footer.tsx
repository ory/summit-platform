import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 bg-blue-500">
      <div className="text-white">&copy; 2023 Ory Summit</div>
      <div className="space-x-4">
        <a href="/terms" className="text-white hover:text-blue-300">
          Terms of Service
        </a>
        <a href="/privacy" className="text-white hover:text-blue-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
