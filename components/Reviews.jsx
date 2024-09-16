import Image from "next/image";
import Review1 from "@/assets/reviews/review1.svg";
import Review2 from "@/assets/reviews/review2.svg";
import Review3 from "@/assets/reviews/review3.svg";
import Comma from "@/assets/reviews/comma.svg";
import CommaWhite from "@/assets/reviews/comma-white.svg";

const Reviews = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="flex items-center gap-5">
          <div className="bg-primary/10 text-primary py-1 px-4 rounded">
            Testimonial
          </div>
          <span className="bg-primary h-[2px] w-28"></span>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">What Our Customers Says</h1>
          <p className="text-secondary md:w-[80%] lg:w-[70%]">
            Our clients rave about THE ACE SOLUTIONS for our creativity,
            professionalism, and dedication to delivering outstanding results.
            They value our commitment to understanding their needs and exceeding
            their expectations with every project.
          </p>
        </div>
        <div className="grid mt-8 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="border shadow-md p-6 rounded-tl-[30px] rounded-br-[30px] relative">
            <div className="flex gap-5">
              <div className="absolute right-5 bottom-5">
                <Image src={Comma} alt="the-ace-solution" height={25} />
              </div>
              <div className="flex items-start justify-center">
                <Image
                  src={Review1}
                  alt="the-ace-solution-review"
                  height={105}
                  width={105}
                />
              </div>
              <div>
                <h2 className="text-xl font-[500]">Musab Umair</h2>
                <p className="text-secondary font-semibold">
                  Senior App Developer at Builtin soft
                </p>
              </div>
            </div>
            <p className="mt-3">
              I recently worked with The ACE Solution on my app design, and
              I&#39;m extremely pleased with the outcome. The designs are
              modern, aligned with my vision, and delivered on time. Their
              professionalism made the process stress-free. Highly recommend!
            </p>
          </article>
          <article className="border shadow-md p-6 rounded-tl-[30px] rounded-br-[30px] bg-black text-white relative">
            <div className="flex gap-5">
              <div className="absolute right-5 bottom-5">
                <Image src={CommaWhite} alt="the-ace-solution" height={25} />
              </div>
              <div className="h-[87px] w-[102px] flex items-start justify-center">
                <Image
                  src={Review2}
                  alt="the-ace-solution-review"
                  height={75}
                  width={75}
                />
              </div>
              <div>
                <h2 className="text-xl font-[500]">Sarah Johnson</h2>
                <p className="text-white/80 font-semibold">
                  Marketing Director at Eco Tech Solutions
                </p>
              </div>
            </div>
            <p>
              Working with THE ACE SOLUTIONS has been a game-changer for our
              brand. Their innovative approach to web development and design has
              truly transformed our online presence.
            </p>
          </article>
          <article className="border shadow-md p-6 rounded-tl-[30px] rounded-br-[30px] relative">
            <div className="flex gap-4">
              <div className="absolute right-5 bottom-5">
                <Image src={Comma} alt="the-ace-solution" height={25} />
              </div>
              <div className="h-[85px] w-[100px] flex items-start justify-center">
                <Image
                  src={Review3}
                  alt="the-ace-solution-review"
                  height={73}
                  width={73}
                />
              </div>
              <div>
                <h2 className="text-xl font-[500]">Emma Rodriguesz</h2>
                <p className="text-secondary font-semibold">
                  Creative Lead at Artsy Studio
                </p>
              </div>
            </div>
            <p>
              The video editing services provided by THE ACE SOLUTIONS are
              top-notch. They took our raw footage and turned it into engaging,
              high-quality content that perfectly aligns with our vision.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
