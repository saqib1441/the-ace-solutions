import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex gap-5">
      <Link
        href="https://facebook.com"
        className="bg-white flex justify-center items-center w-8 h-8 rounded-md text-lg hover:scale-110 transition-all duration-300 hover:bg-main text-black hover:text-white"
        target="_blank"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://linkedin.com"
        className="bg-white flex justify-center items-center w-8 h-8 rounded-md text-lg hover:scale-110 transition-all duration-300 hover:bg-main text-black hover:text-white"
        target="_blank"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://instagram.com"
        className="bg-white flex justify-center items-center w-8 h-8 rounded-md text-lg hover:scale-110 transition-all duration-300 hover:bg-main text-black hover:text-white"
        target="_blank"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default Socials;
