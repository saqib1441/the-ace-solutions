"use client";

import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/Button";
import Logo from "@/assets/logo.svg";
import NavOverlay from "@/assets/nav-overlay.svg";

const Navbar = () => {
  const nav = useRef();

  const navToggler = () => {
    nav.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav className="relative">
      <div className="h-full absolute md:w-[100px] w-[60px] top-0 left-0">
        <Image src={NavOverlay} alt="the-ace-solutions-logo" />
      </div>
      <div className="wrapper py-5 flex items-center justify-between">
        <Link href="/" className="w-[80px] lg:w-[90px] xl:w-[100px]">
          <Image src={Logo} alt="the-ace-solutions-logo" />
        </Link>
        <div
          className="fixed w-full h-full bg-yellow-100 top-0 left-0 flex justify-center items-center gap-5 font-[500] flex-col translate-x-[100%] transition-all duration-500 md:translate-x-0 md:bg-transparent md:static md:flex-row md:w-auto"
          ref={nav}
        >
          <span
            className="absolute right-5 top-5 text-xl bg-white p-1 rounded cursor-pointer md:hidden"
            onClick={navToggler}
          >
            <FaXmark />
          </span>
          <Link href="#" onClick={navToggler}>
            Home
          </Link>
          <Link href="#services" onClick={navToggler}>
            Services
          </Link>
          <Link href="#work" onClick={navToggler}>
            Portfolio
          </Link>
          <Link href="#team" onClick={navToggler}>
            Team
          </Link>
          <Link href="#contact" onClick={navToggler}>
            <Button>Contact US</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <span className="text-lg cursor-pointer" onClick={navToggler}>
            <FaBars />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
