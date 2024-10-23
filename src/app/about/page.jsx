import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import MShoaib from "@/assets/team/m_shoaib.png";
import SaqibAli from "@/assets/team/saqib_ali.png";
import AhmadNadeem from "@/assets/team/ahmad_nadeem.png";
import AdeelAbbas from "@/assets/team/adeel_abbas.png";
import AhmadAli from "@/assets/team/ahmad_ali.png";
import Contact from "@/components/Contact";

const About = () => {
  const data = [
    {
      imgSrc: MShoaib,
      position: "Founder & CEO",
      name: "Muhammad Shoaib",
      field: "Senior Graphic Designer",
      socilas: [
        {
          icon: <FaFacebookF />,
          url: "facebook.com",
        },
        {
          icon: <FaLinkedinIn />,
          url: "linkedin.com",
        },
        {
          icon: <FaInstagram />,
          url: "instagram.com",
        },
      ],
    },
    {
      imgSrc: SaqibAli,
      position: "Project Manager",
      name: "Saqib Ali",
      field: "Senior Full Stack Developer",
      socilas: [
        {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/msaqib.ali.31392",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://www.linkedin.com/in/m-saqib-ali",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/saqib_ali_ig",
        },
      ],
    },
    {
      imgSrc: AhmadNadeem,
      position: "Team Leader",
      name: "Ahmad Nadeem",
      field: "Senior UX/UI Designer",
      socilas: [
        {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/share/daLuZWuAhrAASSqp/",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://www.linkedin.com/in/ahmad-nadeem-432ba02b3",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/ahmadcreations12",
        },
      ],
    },
    {
      imgSrc: AdeelAbbas,
      position: "Marketing Manager",
      name: "Adeel Abbas",
      field: "Video Editing Expert",
      socilas: [
        {
          icon: <FaFacebookF />,
          url: "facebook.com",
        },
        {
          icon: <FaLinkedinIn />,
          url: "linkedin.com",
        },
        {
          icon: <FaInstagram />,
          url: "instagram.com",
        },
      ],
    },
    {
      imgSrc: AhmadAli,
      position: "Assistant Project Manager",
      name: "Ahmad Ali",
      field: "Full Stack Developer",
      socilas: [
        {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/ahmadali261.1",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://www.linkedin.com/in/ahmadali261",
        },
        {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/ahmadali261.1",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="wrapper py-20 lg:py-28">
        <SectionTitle
          title={"Meet Our Expert Team"}
          our=""
          description="At THE ACE Solution, our expert team consists of skilled professionals in graphic design, UI/UX, web development, video editing, and digital marketing. We collaborate closely to deliver exceptional results, combining creativity and technical expertise to meet our clients' unique needs and drive their success."
        />
        <div className="grid mt-10 md:grid-cols-2 gap-10 lg:grid-cols-3">
          {data &&
            data.map((team, key) => (
              <div
                key={key}
                className="shadow-shadowSecondary text-center py-10 px-5 flex flex-col items-center gap-5 rounded-md"
              >
                <div>
                  <Image
                    src={team.imgSrc}
                    alt="the-ace-solutions-team"
                    className="w-[150px] mx-auto"
                  />
                </div>
                <div>
                  <p className="text-main">{team.position}</p>
                  <h1 className="font-bold text-2xl">{team.name}</h1>
                  <p className="text-secondary">{team.field}</p>
                </div>
                <div className="flex items-center gap-5">
                  {team.socilas &&
                    team.socilas.map((social, key) => (
                      <Link
                        key={key}
                        href={social.url}
                        className="w-10 h-10 border-2
                       rounded-full flex items-center justify-center text-lg border-main hover:bg-main hover:text-white transition-all duration-300"
                        target="_blank"
                      >
                        {social.icon}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="wrapper">
        <Contact />
      </div>
    </section>
  );
};

export default About;
