"use client";

import React from "react";
import Profiles from "@/components/Profiles";

const Carousel = () => {
  return (
    <div
      className="w-full h-screen max-sm:h-auto p-12 max-sm:px-4 md:pt-32 flex flex-col justify-between"
      style={{
        backgroundImage: "url(/overlay.png), url(/bg.jpg)",
        backgroundAttachment: "scroll, scroll",
      }}
    >
      {/* Top list */}
      <div className="w-full flex flex-col items-end max-sm:items-center gap-8">
        {/* Image Icon */}
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
          <img className="w-full h-full" src="/me.png" alt="Youssef" />
        </div>
        {/* Bio */}
        <h1 className="w-[80%] max-sm:w-full text-end max-sm:text-center text-[20px] text-white leading-10">
          I am Youssef Maher,&nbsp;
          <span className="text-[#FFFFFF80]">
            Senior Front-end Developer | React, Next.js, Angular | Building
            scalable SaaS apps
          </span>
        </h1>
      </div>
      {/* Bottom List */}
      <div className="max-sm:hidden w-full">
        <Profiles />
      </div>
    </div>
  );
};

export default Carousel;
