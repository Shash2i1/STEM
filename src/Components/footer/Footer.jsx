import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Forum
          </a>
        </div>

        {/* Middle Section */}
        <div className="text-center mt-4 md:mt-0">
          <p className="font-semibold text-lg">STEM</p>
          <p className="text-sm max-w-md leading-5 mt-1">
            Science Technology Engineering and Mathematics, is the prestigious
            event organised annually by Anjuman Institute of Technology and
            Management, which engages the Pre-University students from various
            colleges around Bhatkal.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 flex-col">
            {/* College Logo */}
            <img
              src="./img/image.png" // Replace with the correct path
              alt="College Logo"
              className="w-12 h-12"
            />
            <p className="text-sm">
              Organised by:
              <br />
              Anjuman Institute of Technology and Management, Bhatkal - 581320
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/anjumanitm/" className="hover:text-blue-500">
            <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/anjumanitm/" className="hover:text-pink-500">
            <Icon icon="mdi:instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Icon icon="mdi:twitter" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/school/anjumanitm/posts/?feedView=all" className="hover:text-blue-700">
            <Icon icon="mdi:linkedin" className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/c/AITMBhatkal" className="hover:text-red-600">
            <Icon icon="mdi:youtube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
