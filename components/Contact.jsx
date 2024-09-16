import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactImg from "@/assets/contact/contact.png";
import ContactOverlay from "@/assets/contact/contact-overlay.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="py-16 bg-black text-white rounded-2xl flex gap-5 justify-between px-7">
          <div className="flex flex-col justify-center gap-4 lg:pl-20 lg:w-[50%]">
            <div className="flex items-center gap-5">
              <div className="bg-primary/10 text-primary py-1 px-4 rounded uppercase font-semibold text-sm">
                Start Now
              </div>
              <span className="bg-primary h-[2px] w-28"></span>
            </div>
            <h1 className="md:text-3xl text-2xl font-semibold">
              <span className="text-primary">Feel</span> Free to Contact Us, Get
              Started Now!
            </h1>
            <div className="text-sm mb-2">
              <p className="uppercase mb-2">Email US</p>
              <div className="flex items-center gap-2">
                <span>
                  <FaEnvelope />
                </span>
                <p>theacezpr@gmail.com</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="uppercase mb-2">Contact Us</p>
              <div className="flex items-center gap-2 mb-2">
                <span>
                  <FaPhone />
                </span>
                <p>+92 307 0234217</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <FaPhone />
                </span>
                <p>+92 312 0234217</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span>
                  <FaPhone />
                </span>
                <p>+92 310 9655497</p>
              </div>
            </div>
          </div>
          <div className="h-full pr-20 relative hidden lg:flex">
            <div className="absolute bottom-[0%] -left-[20%]">
              <Image
                src={ContactOverlay}
                alt="the-ace-solutions-contact"
                width={180}
              />
            </div>
            <Image
              src={ContactImg}
              alt="the-ace-solutions-contact"
              className="h-full"
              width={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
