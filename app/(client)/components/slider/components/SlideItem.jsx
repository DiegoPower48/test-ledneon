"use client";

import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];

  return (
    <div className="absolute inset-0">
      <picture>
        <source media="(max-width: 767px)" srcSet={slide.imgSrcMobile} />
        <img
          src={slide.imgSrc}
          alt={slide.altText}
          width={800}
          height={450}
          loading="eager"
          decoding="async"
          className="object-cover object-center w-full h-full"
          style={{ position: "absolute", inset: 0 }}
        />
      </picture>

      {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />

      {/* Borde derecho borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
    </div>
  );
};
