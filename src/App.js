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


function App() {
  return (
    <main className='relative'
    
    >
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
