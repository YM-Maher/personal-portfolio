"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const RecentWorks = () => {
  const [recentWorks] = useState([
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
    },
    {
      image: "/projects/01.jpg",
      title: "Magna sed consequat tempus",
      description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat.",
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
            <div className="relative group w-full h-full rounded-lg max-sm:rounded-sm overflow-hidden cursor-pointer">
              <img
                className="w-full h-full z-0"
                src={work.image}
                alt={work.title}
              />
              <img
                src="/overlay.png"
                alt="Overlay"
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <Button className="view-btn">View</Button>
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
