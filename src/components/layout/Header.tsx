import React from "react";
import { Button } from "@/components/ui/button";
import { CloudDownload } from "lucide-react";

const Header = () => {
  return (
    <div className="pb-16 flex flex-col gap-8 border-b-2 border-[#efefef]">
      <h2 className="text-[32px] max-sm:text-[22px] text-[#878787]">
        Building Scalable, Performant, and Modern Web Applications for SaaS and
        Enterprise Platforms
      </h2>
      <p className="text-[16px] max-sm:text-[14px] text-[#a2a2a2] leading-7">
        I specialize in creating fast, responsive, and scalable web applications
        that power real-world business platforms. With 4+ years of experience
        across enterprise systems and SaaS solutions, I bring deep technical
        skills in React, Next.js, Angular, and Tailwind—combined with a strong
        understanding of user experience, system architecture, and clean code
        principles. Whether building from scratch or optimizing large codebases,
        I focus on delivering maintainable, high-impact solutions that scale
        with your needs.
      </p>
      <a className="main-btn text-sm gap-2" href="/Youssef Maher.pdf" download>
        <CloudDownload size="20px" />
        Resume
      </a>
    </div>
  );
};

export default Header;
