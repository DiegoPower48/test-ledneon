import { useEffect, useState } from "react";

export const SlideItem = ({ slides, current,slidesMovil }) => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const generateCloudinaryUrl = () => {
      if(isMobile){
return slidesMovil[current].imgSrc
      }
      return slides[current].imgSrc


    // const base = "upload/";
    // const insert = isMobile
    //   ? "w_768,h_450,c_fill,f_auto,q_auto"
    //   : "w_1440,h_700,c_fill,f_auto,q_auto";

    // return url.replace(base, `${base}${insert}/`);
  };

  // const imageSrc = generateCloudinaryUrl(slide.imgSrc);

  return (
    <div className="relative w-full h-[500px] sm:h-[700px] overflow-hidden">
      <img
        src={generateCloudinaryUrl()}
        alt={slides[current].altText}
         width={128}
  height={160}
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
