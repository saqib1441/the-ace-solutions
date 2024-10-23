import Image from "next/image";
import DigitalSolutions from "@/assets/services/digital_solutions_service.png";
import EfficientDelivery from "@/assets/services/efficient_delivery_service.png";
import InnovativeApproach from "@/assets/services/innovative_approach_service.png";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import LottieAnimation from "@/components/LottieAnimation";

const ServicesPage = () => {
  return (
    <section>
      <div className="wrapper py-20 lg:py-28 lg:flex">
        <div className="lg:w-[50%]">
          <p className="font-semibold text-secondary">Why choose US?</p>
          <h1 className="font-bold text-4xl my-2 2xl:text-5xl">
            The ACE Solution Provide Creative Services to grow your business to
            10x
          </h1>
          <div className="mt-5 grid gap-5">
            <div className="flex items-center gap-5">
              <div className="bg-background_primary w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={DigitalSolutions}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1>Digital Solution</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, ullam.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-background w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={EfficientDelivery}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1>Timely and Efficient Delivery</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, ullam.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-background_tertiary w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={InnovativeApproach}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1>Innovative Approach</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, ullam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:w-[50%] lg:-mt-10">
          <LottieAnimation />
        </div>
      </div>
      <div className="wrapper">
        <Services />
        <Contact />
      </div>
    </section>
  );
};

export default ServicesPage;
