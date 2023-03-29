import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 bg-black">
      <div className="text-white">&copy; 2023 Ory Summit</div>
      <div className="space-x-4">
        <a href="https://ory.sh/tos" className="text-white hover:text-blue-300">
          Join the chat 🚀
        </a>
        <a
          href="https://ory.sh/contact"
          className="text-white hover:text-blue-300"
        >
          Contact
        </a>
        <a
          href="https://twitter.com/OryCorp"
          className="text-white hover:text-blue-300"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/ory-corp"
          className="text-white hover:text-blue-300"
        >
          LinkedIn
        </a>
        <a
          href="https://www.ory.sh/code-of-conduct/"
          className="text-white hover:text-blue-300"
        >
          Code Of Conduct
        </a>
        <a
          href="https://ory.sh/privacy"
          className="text-white hover:text-blue-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
