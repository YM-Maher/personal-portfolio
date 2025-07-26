"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { toast } from "sonner";

const Profiles = () => {
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "ymaher.737@gmail.com";
    const success = await copyToClipboard(email);

    if (success) {
      // You can add a toast notification here if you want
      toast.success("Email copied to clipboard!");
    } else {
      toast.error("Failed to copy email to clipboard");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex sm:justify-end max-sm:justify-center gap-6">
        <button
          onClick={handleEmailClick}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Mail color="#ffffff66" size={28} />
        </button>
        <a href="https://github.com/YM-Maher" target="_blank">
          <Github color="#ffffff66" size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-maher-57542117a/"
          target="_blank"
        >
          <Linkedin color="#ffffff66" size={28} />
        </a>
      </div>
      {/* Copy Rights */}
      <div className="text-xs text-gray-400 mt-4 sm:text-end max-sm:text-center">
        <p className="text-[#ffffff66]">
          © {new Date().getFullYear()} Youssef Maher. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Profiles;
