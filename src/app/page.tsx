import Hero from "./components/Landingpage/hero";
import Partition from "./components/Landingpage/parition";
import Scroll from "./components/Landingpage/scroll"
import Carousel from "./components/Landingpage/carousel";
import Experience from "./components/Landingpage/experience";
import Projects from "./components/Landingpage/projects";
import Education from "./components/Landingpage/education";
import Footer from "./components/common/footer";

export default function Home() {
  return (

    <>
    <div className="flex flex-col gap-[7vw] px-[7vw] md:px-[15vw]">

      <Hero />
      <Partition />
      <Scroll />
      <Carousel />
      <Experience />
      <Projects />
      <Education />

    </div>
    <Footer />
    </>
  );
}
