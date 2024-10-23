import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import Logo from "@/assets/dark_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="wrapper grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <Link href="/">
            <Image
              src={Logo}
              alt="the-ace-solutions-logo"
              className="w-[130px]"
            />
          </Link>
          <p className="text-center lg:text-start">
            THE ACE SOLUTIONS is your go-to partner for innovative website
            development, cutting-edge UI/UX design, captivating graphic design
            ,Video Editing and Digital Marketing . We transform your ideas into
            digital experiences that resonate with your audience
          </p>
          <Socials />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl">
            Our <span className="text-main">Services</span>
          </h1>
          <div className="flex flex-col items-center gap-4">
            <Link href="/services">Web Development</Link>
            <Link href="/services">UX/UI Design</Link>
            <Link href="/services">Graphic Design</Link>
            <Link href="/services">Video Editing</Link>
            <Link href="/services">Digital Marketing</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl">
            Contact <span className="text-main">Us</span>
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p>+92307 0234217</p>
            <p>theacezpr@gmail.com</p>
            <p>Zahir Pir, Punjab, Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
