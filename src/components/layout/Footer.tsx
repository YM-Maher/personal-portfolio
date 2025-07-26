import React from "react";
import Profiles from "@/components/Profiles";

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
      <Profiles />
    </div>
  );
};

export default Footer;
