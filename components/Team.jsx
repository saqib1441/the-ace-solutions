import Image from "next/image";
import MUhammadShoaib from "@/assets/team/muhammad-shoaib.svg";
import AhmadAli from "@/assets/team/ahmad-ali.svg";
import SaqibAli from "@/assets/team/saqib-ali.svg";
import AdeelAbbas from "@/assets/team/adeel-abbas.svg";

const Team = () => {
  return (
    <section id="team">
      <div className="wrapper flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">Our Team</h1>
          <p className="text-secondary text-center lg:w-[80%] mx-auto xl:w-[70%]">
            Our team at THE ACE SOLUTIONS consists of talented professionals
            specializing in web development, UI/UX design, graphic design, and
            video editing. We combine creativity and technical expertise to
            bring your ideas to life, delivering high-quality digital solutions
            that stand out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article className="flex flex-col gap-2 items-center py-10 shadow-md rounded-xl border">
            <div className="w-[195px]">
              <Image
                src={MUhammadShoaib}
                alt="saqib-ali-ceo-the-ace-solutions"
                className="-mt-3"
              />
            </div>
            <h3 className="text-primary">Founder & Director</h3>
            <h1 className="text-3xl font-semibold uppercase">
              Muhammad Shoaib
            </h1>
            <p>Graphics Designer</p>
          </article>
          <article className="flex flex-col gap-2 items-center py-10 shadow-md rounded-xl border">
            <div className="h-[180px]">
              <Image
                src={SaqibAli}
                alt="ahmad-ali-ceo-the-ace-solutions"
                className="h-full"
              />
            </div>
            <h3 className="text-primary">CEO</h3>
            <h1 className="text-3xl font-semibold uppercase">Saqib Ali</h1>
            <p>Senior Full Stack Developer</p>
          </article>
          <article className="flex flex-col gap-2 items-center py-10 shadow-md rounded-xl border">
            <div className="h-[180px]">
              <Image
                src={AhmadAli}
                alt="ahmad-ali-ceo-the-ace-solutions"
                className="h-full"
              />
            </div>
            <h3 className="text-primary">Team Leader</h3>
            <h1 className="text-3xl font-semibold uppercase">Ahmad Nadeem</h1>
            <p>UX/UI Designer</p>
          </article>
          <article className="flex flex-col gap-2 items-center py-10 shadow-md rounded-xl border">
            <div className="h-[180px]">
              <Image
                src={AdeelAbbas}
                alt="adeel-abbas-co-founder-the-ace-solutions"
                className="h-full"
              />
            </div>
            <h3 className="text-primary">Marketing Manager</h3>
            <h1 className="text-3xl font-semibold uppercase">Adeel Abbas</h1>
            <p>Expert Video Editor</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;
