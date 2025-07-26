"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "../ProjectModal";

const RecentWorks = () => {
  const [recentWorks] = useState([
    {
      image: "/projects/neom.webp",
      title: "GroundX DAM",
      description:
        "Advanced digital asset management platform for organizing, storing, and distributing media files.",
    },
    {
      image: "/projects/remat.jpeg",
      title: "Investor Portal",
      description:
        "Modern investment platform for tracking documents, and facilitating investor communications.",
    },
    {
      image: "/projects/badael.jpeg",
      title: "Retail Management System",
      description:
        "Complete retail solution for inventory management, sales tracking, and customer relationship management.",
    },
    {
      image: "/projects/octavia.png",
      title: "Tender Manager",
      description:
        "Comprehensive tender management system for streamlining procurement processes and bid submissions.",
    },
    {
      image: "/projects/sinaai.png",
      title: "AI Medical Dictation Platform",
      description:
        "Intelligent speech-to-text platform designed specifically for medical professionals and clinical documentation.",
    },
    {
      image: "/projects/sec.jpeg",
      title: "Project Management App",
      description:
        "Efficient project management platform for task tracking, team collaboration, and milestone monitoring.",
    },
    // Add more items as needed
  ]);

  return (
    <div className="w-full py-16 max-sm:py-8 flex flex-col border-b-2 border-[#efefef]">
      <h2 className="pb-8 max-sm:pb-4 text-[24px] max-sm:text-[18px] text-[#787878]">
        Recent Works
      </h2>
      <div className="w-full pb-8 grid grid-cols-2 max-sm:grid-cols-1 gap-16 max-sm:gap-6">
        {recentWorks.map((work, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            <div className="relative group w-full h-[225px] rounded-lg border-2 max-sm:rounded-sm overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover"
                src={work.image}
                alt={work.title}
              />
              <img
                src="/overlay.png"
                alt="Overlay"
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <ProjectModal
                projectImage={work.image}
                projectName={work.title}
                projectDetails={work.description}
              />
            </div>
            <p className="pt-4 text-[16px] text-[#787878]">{work.title}</p>
            <p className="text-[12px] text-[#a2a2a2]">{work.description}</p>
          </div>
        ))}
      </div>
      <Button className="main-btn">Full Portfolio</Button>
    </div>
  );
};

export default RecentWorks;
