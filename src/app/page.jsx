import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <Header />
        <Services />
        <Portfolio />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="wrapper">
        <Contact />
      </section>
    </>
  );
};

export default Home;
