"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];
  const isFirst = current === 0;

  return (
    <div className="absolute inset-0 bg-black">
      {isFirst ? (
        <Image
          src="/home/logo_mlg_letras_doradas_con_iluminacion.webp"
          alt="Logotipo dorado iluminado de MLG en pared de oficina"
          width={800}
          height={450}
          priority
          fetchPriority="high"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw"
        />
      ) : (
        <Image
          src={slide.imgSrc}
          alt={slide.altText}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {/* Overlay solo en md+ */}
      <div className="hidden md:block absolute inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  );
};