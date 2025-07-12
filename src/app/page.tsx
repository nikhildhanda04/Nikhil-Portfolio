import Hero from "./components/Landingpage/hero";
import Partition from "./components/Landingpage/parition";
import Scroll from "./components/Landingpage/scroll"
import Carousel from "./components/Landingpage/carousel";


export default function Home() {
  return (

    <>
    <div className="flex flex-col gap-[5vw]">
      <Hero />
      <Partition />
      <Scroll />
      <Carousel />

    </div>
    </>
  );
}
