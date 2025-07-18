"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];

  return (
    <div className="absolute inset-0 bg-black">
      <Image
        src={slide.imgSrc}
        alt={slide.altText}
        width={800}
        height={450}
        priority
        fetchPriority="high"
        decoding="async"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw"
      />

      {/* Overlay solo en md+ */}
      <div className="hidden md:block absolute inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  );
};