import Image from "next/image";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];

  return (
    <div className="relative w-full h-[500px] sm:h-[700px] overflow-hidden">
      <Image
        src={slide.imgSrc}
        alt={slide.altText}
        fill
        priority={current === 0}
        fetchPriority={current === 0 ? "high" : undefined}
        className="object-cover object-center w-full h-full brightness-75"
        decoding="async"
        loading={current === 0 ? "eager" : "lazy"}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw"
      />

      {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
      {/* Borde derecho borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
    </div>
  );
};

export default SlideItem;
