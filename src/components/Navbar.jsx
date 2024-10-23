"use client";

import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const nav = useRef();
  const navbar = useRef();
  const pathname = usePathname();

  const NavbarHandler = () => {
    navbar.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav ref={nav} className="shadow-shadowPrimary">
      <div className="wrapper py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            className="w-[70px] sm:w-[90px]"
            alt="the-ace-solutions-log"
          />
        </Link>
        <div
          className="fixed w-full h-full left-0 top-0 bg-primary text-white font-[500] flex flex-col items-center justify-center gap-7 z-50 translate-x-[100%] transition-all duration-500 sm:translate-x-0 sm:static sm:w-auto sm:flex-row sm:bg-transparent sm:text-primary"
          ref={navbar}
        >
          <Link
            href="/"
            className={`hover:text-main transition-all duration-300 before:absolute before:bg-main relative before:w-0 before:h-[3px] before:-bottom-[3px] before:rounded-full before:hover:w-full before:transition-all before:duration-300 ${
              pathname === "/" ? "text-main" : ""
            }`}
            onClick={NavbarHandler}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-main transition-all duration-300 before:absolute before:bg-main relative before:w-0 before:h-[3px] before:-bottom-[3px] before:rounded-full before:hover:w-full before:transition-all before:duration-300 ${
              pathname === "/about" ? "text-main" : ""
            }`}
            onClick={NavbarHandler}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`hover:text-main transition-all duration-300 before:absolute before:bg-main relative before:w-0 before:h-[3px] before:-bottom-[3px] before:rounded-full before:hover:w-full before:transition-all before:duration-300 ${
              pathname === "/services" ? "text-main" : ""
            }`}
            onClick={NavbarHandler}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-main transition-all duration-300 before:absolute before:bg-main relative before:w-0 before:h-[3px] before:-bottom-[3px] before:rounded-full before:hover:w-full before:transition-all before:duration-300 ${
              pathname === "/portfolio" ? "text-main" : ""
            }`}
            onClick={NavbarHandler}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`hover:text-main transition-all duration-300 before:absolute before:bg-main relative before:w-0 before:h-[3px] before:-bottom-[3px] before:rounded-full before:hover:w-full before:transition-all before:duration-300 ${
              pathname === "/contact" ? "text-main" : ""
            }`}
            onClick={NavbarHandler}
          >
            Contact
          </Link>
          <span
            className="absolute right-7 top-5 text-lg cursor-pointer bg-white text-primary p-1 rounded hover:bg-main hover:text-white transition-all duration-300 sm:hidden"
            onClick={NavbarHandler}
          >
            <FaXmark />
          </span>
        </div>
        <span
          className="text-lg cursor-pointer sm:hidden"
          onClick={NavbarHandler}
        >
          <FaBarsStaggered />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
