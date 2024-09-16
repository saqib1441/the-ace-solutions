import Image from "next/image";
import Hero from "@/assets/hero.png";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="wrapper flex items-center gap-5 h-[85vh] xl:h-[90vh] py-20">
        <div className="flex-1 lg:w-[50%] flex gap-5 flex-col lg:items-start">
          <div className="flex flex-col items-center text-4xl text-center font-bold sm:text-5xl lg:text-4xl lg:items-start gap-2 xl:text-6xl lg:text-start">
            <h1 className="text-5xl xl:text-6xl">
              <span className="text-primary">Grow</span> Your Buisness With Our
            </h1>
            <span className="text-white bg-primary px-2 py-1 xl:text-5xl">
              Creative Solutions
            </span>
          </div>
          <p className="text-center text-secondary lg:text-left">
            THE ACE SOLUTIONS is your go-to partner for innovative website
            development, cutting-edge UI/UX design, captivating graphic design
            and Video Editing . We transform your ideas into digital experiences
            that resonate with your audience.
          </p>
          <Link href="#contact" className="mx-auto lg:mx-0">
            <Button>Reach US</Button>
          </Link>
        </div>
        <div className="flex-1 w-[50%] hidden lg:flex">
          <Image src={Hero} alt="the-ace-solutions-hero" />
        </div>
      </div>
    </header>
  );
};

export default Header;
