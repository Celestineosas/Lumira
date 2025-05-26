import AboutUs from "./sections/AboutUs/AboutUs";
import AboutUs2 from "./sections/AboutUs2/AboutUs2";
import BestSelling from "./sections/BestSelling/BestSelling";
import BodyContent from "./sections/BodyContent/BodyContent";
import Footer from "./sections/Foooter/Footer";
import Header from "./sections/Header/Header";
import HorizontalScroll from "./sections/HorizontalScroll/HorizontalScroll";
import SkinCare from "./sections/SkinCare/SkinCare";
import WhyChoose from "./sections/WhyChoose/WhyChoose";
import YourSkin from "./sections/YourSikn/YourSkin";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="relative">
      <Header />
      <WhyChoose />
      <YourSkin />
      <HorizontalScroll />
      <BestSelling />
      <SkinCare />
      <BodyContent />
      <HorizontalScroll />
      <AboutUs />
      <AboutUs2 />
      <HorizontalScroll />
      <Footer />
    </main>
  );
}

export default App;
