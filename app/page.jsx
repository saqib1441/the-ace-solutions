import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Work from "@/components/Work";

const Home = () => {
  return (
    <section className="flex flex-col gap-28">
      <div className="bg-primary/10">
        <Navbar />
        <Header />
      </div>
      <Services />
      <Work />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
