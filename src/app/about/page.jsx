import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Team1 from "@/assets/team/team_1.png";
import Contact from "@/components/Contact";

const About = () => {
  const data = [
    {
      imgSrc: Team1,
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
      imgSrc: Team1,
      position: "Project Manager",
      name: "Saqib Ali",
      field: "Senior Full Stack Developer",
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
      imgSrc: Team1,
      position: "Team Leader",
      name: "Ahmad Nadeem",
      field: "Senior UX/UI Designer",
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
      imgSrc: Team1,
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
      imgSrc: Team1,
      position: "Assistant Project Manager",
      name: "Ahmad Ali",
      field: "Full Stack Developer",
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
