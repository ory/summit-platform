import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 text-[#c46ef5] bg-black">
      <div className="">&copy; 2023 Ory Summit</div>
      <div className="space-x-4 text-[#c46ef5]">
        <a
          href="https://forms.gle/Bhh86qhh4hCek4Eg8"
          className="hover:text-white"
        >
          Call for Papers
        </a>
        <a href="https://ory.sh/tos" className="hover:text-white">
          Join the chat 🚀
        </a>
        <a href="https://ory.sh/contact" className="hover:text-white">
          Contact
        </a>
        <a href="https://twitter.com/OryCorp" className="hover:text-white">
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/ory-corp"
          className="hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://www.ory.sh/code-of-conduct/"
          className="hover:text-white"
        >
          Code Of Conduct
        </a>
        <a href="https://ory.sh/privacy" className="hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
