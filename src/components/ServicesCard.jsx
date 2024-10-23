import Image from "next/image";

const ServicesCard = ({ img = "", title = "", description = "" }) => {
  return (
    <div className="flex flex-col items-center gap-3 shadow-shadowPrimary py-16 px-10 rounded-md sm:px-5 h-full hover:scale-105 cursor-pointer transition-all duration-300">
      <div className="w-20 h-20 bg-main/10 rounded-full flex justify-center items-center">
        <Image
          src={img}
          alt={`the-ace-solutions-services`}
          className="w-8 h-8"
        />
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p className="text-sm text-secondary text-center">{description}</p>
    </div>
  );
};

export default ServicesCard;
