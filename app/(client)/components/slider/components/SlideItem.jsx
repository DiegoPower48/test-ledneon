import Image from "next/image";
import { useEffect, useState } from "react";

export const SlideItem = ({ slides, current, slidesMovil }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slide = isMobile ? slidesMovil[current] : slides[current];

  return (
    <div className="relative w-full h-[500px] sm:h-[700px] overflow-hidden">
      <Image
  src={slide.imgSrc}
  
fill
  alt={slide.altText}
 
  className="object-cover object-center w-full h-full brightness-75"
  decoding="async"
  fetchPriority="high"
  loading="eager"
/>


      {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
      {/* Borde derecho borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
    </div>
  );
};

export default SlideItem;
