"use client";
import Image from "next/image";
import Testimonial1 from "@/assets/testimonials/testimonial_1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SectionTitle from "./SectionTitle";

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
          <SectionTitle
            title="Testimonial"
            description="Discover what our satisfied clients have to say about their experiences with us. Our commitment to excellence and customer satisfaction shines through in their words. Read on to see how we've made a difference for businesses like yours!"
          />
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={1000}
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
                  <p className="text-secondary lg:w-[75%] mx-auto text-center">
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
