import { FiPhoneCall } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";

const ContactForm = () => {
  return (
    <div>
      <div className="text-center lg:text-start">
        <h1 className="font-bold text-4xl mb-3">
          Get in <span className="text-main">Touch</span>
        </h1>
        <p className="text-secondary">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
      </div>
      <form className="mt-10 flex flex-col gap-3 lg:mt-5">
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 focus:outline-none bg-white border-secondary/40 border-2 text-secondary"
        />
        <input
          type="text"
          placeholder="Email"
          className="py-2 px-4 focus:outline-none bg-white border-secondary/40 border-2 text-secondary"
        />
        <textarea
          placeholder="Description"
          className="py-2 px-4 focus:outline-none bg-white border-secondary/40 border-2 text-secondary resize-none h-[175px]"
        ></textarea>
        <button
          type="submit"
          className="bg-main font-semibold py-2 text-white tracking-wide hover:bg-main/90 transition-all duration-300"
        >
          SEND
        </button>
      </form>
      <div className="mt-10 flex gap-6 lg:mt-5 flex-col sm:flex-row">
        <div className="flex gap-4 items-center">
          <span className="text-3xl">
            <FiPhoneCall />
          </span>
          <div>
            <h1 className="font-semibold">PHONE</h1>
            <p className="text-main">+92307 0234217</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-4xl">
            <LiaEnvelopeOpenTextSolid />
          </span>
          <div>
            <h1 className="font-semibold">EMAIL</h1>
            <p className="text-main text-wrap">theacezpr@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
