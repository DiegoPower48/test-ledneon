"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];

  return (
    <div className="absolute inset-0 aspect-[16/9] md:aspect-[16/7]">
      <Image
        src={slide.imgSrcMobile || slide.imgSrc}
        alt={slide.altText}
        fill
        priority={current === 0} // Solo prioridad para el primer slide
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw"
      />

      {/* Overlay para MD+ */}
      <div className="hidden md:block absolute inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  );
};
