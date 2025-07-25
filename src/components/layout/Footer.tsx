import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full h-screen max-sm:h-auto p-12 max-sm:px-4 md:pt-32 flex flex-col justify-between"
      style={{
        backgroundImage: "url(/overlay.png), url(/bg.jpg)",
        backgroundAttachment: "scroll, scroll",
      }}
    >
      {/* Profile Links */}
      <div className="w-full flex justify-center gap-6">
        <a href="">
          <Mail color="#ffffff66" size={28} />
        </a>
        <a href="">
          <Github color="#ffffff66" size={28} />
        </a>
        <a href="">
          <Linkedin color="#ffffff66" size={28} />
        </a>
      </div>
      {/* Copy Rights */}
      <div className="text-xs text-gray-400 mt-4 text-center">
        <p className="text-[#ffffff66]">
          © {new Date().getFullYear()} Youssef Maher. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
