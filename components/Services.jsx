import Image from "next/image";
import Monitor from "@/assets/services/monitor.svg";
import Marketing from "@/assets/services/marketing.svg";
import Pentool from "@/assets/services/pen-tool.svg";
import VideoLesson from "@/assets/services/video-lesson.svg";
import { FaChartLine } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">Our Services</h1>
          <p className="text-secondary text-center lg:w-[80%] mx-auto xl:w-[70%]">
            THE ACE SOLUTIONS offers expert services in website development,
            UI/UX design, graphic design and Video Editing . We bring your ideas
            to life with visually stunning and user-friendly digital solutions
            that help your brand stand out.
          </p>
        </div>
        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
          <article className="border shadow rounded-2xl flex flex-col items-center py-8 px-5 gap-3 cursor-pointer">
            <div className="bg-primary p-5 rounded-full h-[100px] w-[100px] flex items-center justify-center">
              <Image
                src={Monitor}
                alt="the-ace-solutions"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-semibold text-2xl text-center">
              Web Development
            </h1>
            <p className="text-secondary text-center text-sm md:text-base">
              We build responsive and dynamic websites tailored to your business
              needs, ensuring a seamless and engaging online presence.
            </p>
          </article>
          <article className="border shadow rounded-2xl flex flex-col items-center py-8 px-5 gap-3">
            <div className="bg-primary p-5 rounded-full h-[100px] w-[100px] flex items-center justify-center">
              <Image
                src={Pentool}
                alt="the-ace-solutions"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-semibold text-2xl text-center">
              Graphics & UX/UI Design
            </h1>
            <p className="text-secondary text-center text-sm md:text-base">
              We design intuitive and visually stunning user interfaces that
              enhance user experience and drive engagement across all platforms.
            </p>
          </article>
          <article className="border shadow rounded-2xl flex flex-col items-center py-8 px-5 gap-3">
            <div className="bg-primary p-5 rounded-full h-[100px] w-[100px] flex items-center justify-center">
              <Image
                src={VideoLesson}
                alt="the-ace-solutions"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-semibold text-2xl text-center">
              Video Editing
            </h1>
            <p className="text-secondary text-center text-sm md:text-base">
              We create impactful and visually appealing graphics that
              effectively communicate your brand&#39;s message and make a
              lasting impression.
            </p>
          </article>
          <article className="border shadow rounded-2xl flex flex-col items-center py-8 px-5 gap-3">
            <div className="bg-primary p-5 rounded-full h-[100px] w-[100px] flex items-center justify-center text-white">
              <FaChartLine size={50} />
            </div>
            <h1 className="font-semibold text-2xl text-center">
              Digital Marketing
            </h1>
            <p className="text-secondary text-center text-sm md:text-base">
              Boost your brand with our digital marketing services: SEO, PPC,
              social media management, and content creation to drive traffic and
              grow your business.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
