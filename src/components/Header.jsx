import Link from "next/link";
import LottieAnimation from "./LottieAnimation";

const Header = () => {
  return (
    <header className="py-20 lg:flex lg:py-28">
      <div className="flex flex-col items-center text-center gap-5 lg:w-[50%] lg:text-start lg:items-start justify-center">
        <h1 className="font-bold text-[34px] lg:text-[40px] lg:leading-[50px] 2xl:text-5xl">
          We Help to <span className="text-main">Grow Your Business</span> With
          our Creative Solutions
        </h1>
        <p className="text-secondary">
          THE ACE SOLUTIONS is your go-to partner for innovative website
          development, cutting-edge UI/UX design, captivating graphic design ,
          Video Editing and Digital Marketing . We transform your ideas into
          digital experiences that resonate with your audience
        </p>
        <Link href="/contact" className="btn text-white shadow-shadowSecondary">
          Contact us
        </Link>
      </div>
      <div className="mt-10 lg:w-[50%] lg:-mt-10 h-[500px]">
        <LottieAnimation />
      </div>
    </header>
  );
};

export default Header;
