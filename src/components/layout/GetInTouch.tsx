import React from "react";
import ContactForm from "@/components/ContactForm";
import { House, Mail, Smartphone } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="w-full py-16 max-sm:py-8 flex flex-col">
      <h2 className="pb-8 max-sm:pb-4 text-[24px] max-sm:text-[18px] text-[#787878]">
        Get In Touch
      </h2>
      <p className="text-[16px] max-sm:text-[14px] text-[#a2a2a2] leading-7">
        I'm always open to new opportunities, collaborations, or simply chatting
        about frontend technologies, enterprise software, or SaaS platforms.
        Whether you're looking to build something great or just want to say hi —
        feel free to reach out!
      </p>
      <div className="pt-8 flex max-sm:flex-col gap-12">
        {/* Contact Form */}
        <ContactForm />
        {/* Info Section */}
        <div className="w-[50%] max-sm:w-full flex flex-col gap-8 text-[#a2a2a2] max-sm:text-[14px]">
          <div className="flex gap-4">
            <House />
            <p>
              Zaharaa Al-Maadi,
              <br />
              Cairo, Egypt
            </p>
          </div>
          <div className="flex gap-4">
            <Smartphone />
            <p>+20 111 345 3457</p>
          </div>
          <div className="flex gap-4">
            <Mail />
            <p>ymaher.737@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
