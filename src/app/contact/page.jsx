import Image from "next/image";
import Link from "next/link";
import ContactImg from "@/assets/contact/contact_page.png";
import ContactForm from "@/components/ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";

const ContactPage = () => {
  return (
    <section>
      <div className="wrapper py-20 lg:py-28">
        <div className="lg:flex ">
          <div className="flex flex-col items-center text-center gap-5 lg:w-[50%] lg:text-start lg:items-start justify-center">
            <h1 className="font-bold text-5xl">
              Fell Free <br /> To <span className="text-main">Contact US</span>
            </h1>
            <p className="text-secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distributionIt is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution
            </p>
          </div>
          <div className="mt-10 lg:w-[50%] lg:-mt-10">
            <Image
              src={ContactImg}
              alt="the-ace-solutions-contact"
              className="h-[400px] w-auto mx-auto sm:h-[400px] lg:h-auto lg:w-[450px] 2xl:w-[500px]"
            />
          </div>
        </div>
        <div className="mt-20 lg:flex gap-20">
          <div className="grid gap-5 lg:w-[50%]">
            <div className="flex items-center gap-5 bg-main/10 rounded-md py-7 px-6">
              <span className="w-16 h-16 rounded-full bg-main flex items-center justify-center text-3xl text-white">
                <FaLocationDot />
              </span>
              <div>
                <h1 className="font-semibold text-lg">Address</h1>
                <p className="text-secondary">Zahir Pir, Punjab</p>
                <p className="text-secondary">Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-main/10 rounded-md py-7 px-6">
              <span className="w-16 h-16 rounded-full bg-main flex items-center justify-center text-3xl text-white">
                <FiPhoneCall />
              </span>
              <div>
                <h1 className="font-semibold text-lg">Phone</h1>
                <p className="text-secondary">+92307 0234217</p>
                <p className="text-secondary">+92312 0234217</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-main/10 rounded-md py-7 px-6">
              <span className="w-16 h-16 rounded-full bg-main flex items-center justify-center text-4xl text-white">
                <LiaEnvelopeOpenTextSolid />
              </span>
              <div>
                <h1 className="font-semibold text-lg">Email</h1>
                <p className="text-secondary">theacezpr@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
