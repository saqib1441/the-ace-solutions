const SectionTitle = ({ title, description, our = "Our" }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-3">
        {our} <span className="text-main">{title}</span>
      </h1>
      <p className="text-secondary lg:w-[80%] lg:mx-auto">{description}</p>
    </div>
  );
};

export default SectionTitle;
