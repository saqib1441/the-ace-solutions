import Image from "next/image";
import BakeryWebsite from "@/assets/work/bakery-website.png";
import ShoeStore from "@/assets/work/shoe-store.png";
import Link from "next/link";
import Button from "@/components/Button";
import Portfolio1 from "@/assets/work/portfolio.jpg";
import Portfolio2 from "@/assets/work/portfolio2.jpg";
import Portfolio3 from "@/assets/work/portfolio3.jpg";
import Portfolio4 from "@/assets/work/portfolio4.jpg";
import Portfolio5 from "@/assets/work/portfolio5.jpg";
import Portfolio6 from "@/assets/work/portfolio6.jpg";
import Portfolio7 from "@/assets/work/portfolio7.jpg";
import { IoLink } from "react-icons/io5";

const Work = () => {
  return (
    <section id="work">
      <div className="wrapper">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">Our Creative Work</h1>
          <p className="text-secondary text-center lg:w-[80%] mx-auto xl:w-[70%]">
            At THE ACE SOLUTIONS, creativity is at the heart of everything we
            do. We blend innovation with artistry to craft unique digital
            experiences. From eye-catching designs to seamless user interfaces,
            our creative work brings your vision to life in ways that captivate
            and inspire.
          </p>
        </div>
        <div className="flex flex-col items-center py-10">
          <h2 className="text-xl text-primary">Portfolio</h2>
          <h1 className="text-2xl font-semibold">Web Development</h1>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:gap-12">
            <div className="flex items-center justify-center lg:w-[50%]">
              <Image
                src={BakeryWebsite}
                alt="the-ace-solutions-portfolio"
                height={700}
                width={500}
              />
            </div>
            <div className="text-center flex flex-col gap-3 lg:w-[50%] lg:text-start lg:justify-center">
              <h2 className="text-primary text-2xl">01</h2>
              <h1 className="font-semibold text-xl lg:text-2xl">
                Bakery Landing Page Design
              </h1>
              <p className="text-secondary text-sm lg:text-base">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <Link href="#">
                <Button>Visit Site</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-7 lg:flex-row-reverse">
            <div className="flex items-center justify-center lg:w-[50%]">
              <Image
                src={ShoeStore}
                alt="the-ace-solutions-portfolio"
                height={700}
                width={500}
              />
            </div>
            <div className="text-center flex flex-col gap-3 lg:w-[50%] lg:text-start lg:justify-center">
              <h2 className="text-primary text-2xl">02</h2>
              <h1 className="font-semibold text-xl lg:text-2xl text-center md:text-start">
                Shoe Store Ecommerce Landing Page
              </h1>
              <p className="text-secondary text-sm lg:text-base">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <Link href="#">
                <Button>Visit Site</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <h2 className="text-xl text-primary">Portfolio</h2>
          <h1 className="text-2xl font-semibold text-center md:text-start">
            Graphic & UI UX Designing
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio1}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio2}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio3}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio4}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio5}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio6}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
          <article className="border shadow-md rounded-lg overflow-hidden relative flex items-center justify-center group cursor-pointer">
            <Link
              href="#"
              className="absolute bg-primary rounded-full p-4 opacity-0 z-50 group-hover:opacity-100 transition-all duration-300 text-white"
            >
              <IoLink size={25} />
            </Link>
            <Image
              src={Portfolio7}
              alt="the-ace-solutions"
              className="group-hover:scale-105 transition-all duration-300"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Work;
