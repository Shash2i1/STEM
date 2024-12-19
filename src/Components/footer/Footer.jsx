import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          {/* Middle Section */}
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <img
              src="./img/image.png" // Replace with the correct path
              alt="College Logo"
              className="w-16 h-16 mb-3"
            />
            <p className="text-sm text-gray-400">
              Organised by Anjuman Institute of Technology and Management, <br />
              Bhatkal - 581320
            </p>
          </div>

          {/* Left Section */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-semibold">About STEM</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              STEM - Science, Technology, Engineering, and Mathematics is an
              annual event organised by Anjuman Institute of Technology and
              Management, fostering innovation and excellence among Pre-University students
              in and around Bhatkal.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold">Connect with Us</h3>
            <div className="flex justify-center md:justify-end gap-4 mt-4">
              <a
                href="https://www.facebook.com/anjumanitm/"
                className="hover:text-blue-500"
                aria-label="Facebook"
              >
                <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/anjumanitm/"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/school/anjumanitm/posts/?feedView=all"
                className="hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/c/AITMBhatkal"
                className="hover:text-red-600"
                aria-label="YouTube"
              >
                <Icon icon="mdi:youtube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 STEM. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:underline">
              Forum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
