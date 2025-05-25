import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { star } from "../../assets/icons";

const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // optional for smoother tracking
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={targetRef}
      className="flex w-full py-1 justify-center items-center bg-anon-dark max-w-screen-2xl mx-auto relative"
    >
      <div className="sticky top-0 overflow-hidden flex items-center">
        <motion.h1
          style={{ x }}
          className="flex items-center sm:gap-10 gap-3 text-4xl font-nohemi text-gray-300 uppercase whitespace-nowrap"
        >
          Clean <img src={star} className="w-[100px] h-[85px] mb-3" /> Elegant <img src={star} className="w-[100px] h-[85px] mb-3" /> Luxury <img src={star} className="w-[100px] h-[85px] mb-3" /> Authentic <img src={star} className="w-[100px] h-[85px] mb-3" /> Clean <img src={star} className="w-[100px] h-[85px] mb-3" /> Elegant <img src={star} className="w-[100px] h-[85px] mb-3" /> Luxury <img src={star} className="w-[100px] h-[85px] mb-3" /> Authentic <img src={star} className="w-[100px] h-[85px] mb-3" /> Clean <img src={star} className="w-[100px] h-[85px] mb-3" /> Elegant <img src={star} className="w-[100px] h-[85px] mb-3" /> Luxury <img src={star} className="w-[100px] h-[85px] mb-3" />  
        </motion.h1>
      </div>
    </section>
  );
};

export default HorizontalScroll;

