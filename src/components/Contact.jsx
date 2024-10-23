import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactImg from "@/assets/contact/contact_img.png";
import Overlay1 from "@/assets/overlay/overlay_1.png";
import Overlay3 from "@/assets/overlay/overlay_3.png";

const Contact = () => {
  return (
    <div className="lg:flex lg:gap-10 py-20 lg:py-28 relative">
      <div className="absolute lg:w-[160px] w-[120px] lg:-top-10 lg:-left-28 -top-10">
        <Image src={Overlay1} alt="the-ace-solutions" />
      </div>
      <div className="absolute lg:w-[60px] w-[40px] rotate-180 lg:-bottom-12 lg:-right-28 -bottom-10 -right-5">
        <Image src={Overlay3} alt="the-ace-solutions" />
      </div>
      <div className="lg:w-[50%]">
        <ContactForm />
      </div>
      <div className="mt-10 lg:w-[60%] flex items-center justify-center">
        <Image
          src={ContactImg}
          alt="the-ace-solutions-contact"
          className="w-[90%] lg:w-[100%] md:h-[500px] md:w-[80%] mx-auto lg:h-auto"
        />
      </div>
    </div>
  );
};

export default Contact;
