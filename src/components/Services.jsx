import ServicesCard from "./ServicesCard";
import WebDevelopment from "@/assets/services/web_development_service.png";
import UX from "@/assets/services/ux_ui_service.png";
import GraphicDesign from "@/assets/services/graphics_service.png";
import VideoEditing from "@/assets/services/video_editing_service.png";
import DigitalMarketing from "@/assets/services/digital_marketing_service.png";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const data = [
    {
      imgSrc: WebDevelopment,
      title: "Web Development",
      description: "Blog, E-commerce, Full Stack",
    },
    {
      imgSrc: UX,
      title: "UX/UI Design",
      description: "Mobile App, Website, Games Design",
    },
    {
      imgSrc: GraphicDesign,
      title: "Graphic Design",
      description: "Brand Identity, Logo, Social Post, Banner, Product Design",
    },
    {
      imgSrc: VideoEditing,
      title: "Video Editing",
      description: "Promotional, Event, YouTube,Social Media Video Content",
    },
    {
      imgSrc: DigitalMarketing,
      title: "Digital Marketing",
      description: "SMM, SEO, Email, Influencer, Content Marketing",
    },
  ];
  return (
    <main className="py-20 lg:py-28">
      <SectionTitle
        title="Services"
        description="THE ACE Solution offers expert services in graphic design, UI/UX design,
        web development, video editing, and digital marketing. We deliver
        creative, tailored solutions that help businesses grow and thrive.
        Choose us to elevate your brand and achieve lasting success."
      />
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {data &&
          data.map((service, key) => (
            <div key={key}>
              <ServicesCard
                img={service.imgSrc}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
      </div>
    </main>
  );
};

export default Services;
