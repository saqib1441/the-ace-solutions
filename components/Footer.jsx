import Logo from "@/assets/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="px-5 lg:px-10">
        <div className="footer-grid">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <div>
              <Image src={Logo} alt="the-ace-logo" height={40} />
            </div>
            <p className="text-center lg:text-start lg:text-sm">
              THE ACE SOLUTIONS offers expert services in web development, UI/UX
              design, graphic design, and video editing. Our skilled team
              transforms your ideas into dynamic and engaging digital
              experiences, ensuring your brand makes a memorable impact.
            </p>
            <div className="flex items-center gap-6 flex-col md:flex-row">
              <Link
                href="https://www.facebook.com/profile.php?id=61565232037856&mibextid=ZbWKwL"
                className="flex items-center gap-2"
              >
                <span className="text-lg lg:text-base">
                  <FaFacebookF />
                </span>
                <p className="font-semibold lg:text-sm">Facebook</p>
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-ace-solutions-zpr/"
                className="flex items-center gap-2"
              >
                <span className="text-lg lg:text-base">
                  <FaLinkedin />
                </span>
                <p className="font-semibold lg:text-sm">Linkedin</p>
              </Link>
              <Link
                href="https://www.instagram.com/the.acesolution?igsh=YXB3ZXQ2Zm1peXEy"
                className="flex items-center gap-2"
              >
                <span className="text-lg lg:text-base">
                  <FaInstagram />
                </span>
                <p className="font-semibold lg:text-sm">Instagram</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-semibold text-xl">Our Services</h1>
            <div className="flex flex-col gap-3 text-center">
              <Link href="#">Web Development</Link>
              <Link href="#">Digital Marketing</Link>
              <Link href="#">Graphics Designing</Link>
              <Link href="#">UX/UI Designing</Link>
              <Link href="#">Video Editing</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-semibold text-xl">Explore</h1>
            <div className="flex flex-col gap-3 text-center">
              <Link href="#">Services</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Team</Link>
              <Link href="#">Privacy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-semibold text-xl">Contact US</h1>
            <div className="flex flex-col gap-3 text-center">
              <p>theacezpr@gmail.com</p>
              <p>+92 307 0234217</p>
              <p>+92 312 0234217</p>
              <p>+92 310 9655497</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="h-[2px] bg-white w-full block mb-4"></span>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between text-center md:text-start">
            <p>THE ACE SOLUTIONS &copy; All Rights Reserved</p>
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
