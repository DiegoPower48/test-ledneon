"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  return (
 <>
  {slides.map((slide, index) =>
  index === current ? (
    <div
    key={index}
    className="absolute inset-0 opacity-100"
  >
    <Image
      src={slide.imgSrc}
      alt={slide.altText}
      fill
      className="object-cover object-center brightness-75"
      priority
      fetchPriority="high"
      sizes="100vw"
    />

      {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />

      {/* Borde derecho borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
     </div>
  ) : null
)}
</>


  );
};
