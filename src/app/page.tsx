import Hero from "./components/Landingpage/hero";
import Partition from "./components/Landingpage/parition";
import Scroll from "./components/Landingpage/scroll"
import Carousel from "./components/Landingpage/carousel";
import Experience from "./components/Landingpage/experience";
import Time from "./components/Landingpage/time"

export default function Home() {
  return (

    <>
    <div className="flex flex-col gap-[10vw]">
      
      <Hero />
      <Partition />
      <Scroll />
      <Carousel />
      <Experience />
      <Time />

    </div>
    </>
  );
}
