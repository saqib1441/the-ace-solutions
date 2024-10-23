"use client";
import Image from "next/image";
import Testimonial1 from "@/assets/testimonials/testimonial_1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Testimonials = () => {
  const data = [
    {
      imgSrc: Testimonial1,
      name: "Mark Smith",
      role: "Travel Enthusiast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione provident necessitatibus minima doloremque? Ducimus porro obcaecati enim quia ea.",
    },
    {
      imgSrc: Testimonial1,
      name: "Mark Smith",
      role: "Travel Enthusiast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione provident necessitatibus minima doloremque? Ducimus porro obcaecati enim quia ea.",
    },
    {
      imgSrc: Testimonial1,
      name: "Mark Smith",
      role: "Travel Enthusiast",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione provident necessitatibus minima doloremque? Ducimus porro obcaecati enim quia ea.",
    },
  ];
  return (
    <main className="bg-testimonialImg bg-center bg-no-repeat lg:bg-sizeLg bg-size h-[100vh]">
      <div className="py-20 lg:py-28 wrapper">
        <div className="mb-10">
          <h1 className="text-center text-4xl font-bold">
            <span className="text-main">Testimonials</span>
          </h1>
          <p className="font-semibold text-xl text-center">
            Trust of our clients
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
        >
          {data &&
            data.map((testimonial, key) => (
              <SwiperSlide
                className="mb-16 slide select-none cursor-pointer"
                key={key}
              >
                <div className="flex flex-col items-center gap-5">
                  <div>
                    <Image
                      src={testimonial.imgSrc}
                      alt="the-ace-solutions-testimonial"
                      className="w-16"
                    />
                  </div>
                  <h1 className="font-semibold text-lg">
                    <span className="text-main">{testimonial.name}</span> /{" "}
                    <span>{testimonial.role}</span>
                  </h1>
                  <p className="text-secondary w-[75%] mx-auto text-center">
                    {testimonial.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Testimonials;
