import { useEffect, useState } from "react";

export const SlideItem = ({ slides, current }) => {
  const [isMobile, setIsMobile] = useState(false);

  const slide = slides[current]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile(); // Verifica al cargar
    window.addEventListener("resize", checkMobile); // Verifica si cambia el tamaño

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imageSrc = isMobile ? (slide.imgSrcMobile || slide.imgSrc) : slide.imgSrc;

  return (
  <div className="relative w-full h-[500px] sm:h-[700px] overflow-hidden">
  <img
    src={imageSrc}
    alt={slide.altText}
    loading="lazy"
    decoding="async"
    fetchPriority="high"
    className="object-cover object-center w-full h-full brightness-75"
  />

          {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />

            {/* Borde derecho borroso - visible solo en pantallas md+ */}
            <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
        
</div>

  );
};

export default SlideItem;
