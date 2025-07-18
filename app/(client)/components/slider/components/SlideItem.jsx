"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];
  const isFirst = current === 0;

  return (
    <div className="absolute inset-0">
      {isFirst ? (
        <Image
          src="/home/logo_mlg_letras_doradas_con_iluminacion.webp"
          alt="Logotipo dorado iluminado de MLG en pared de oficina"
                  priority
          fetchPriority="high"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 60vw"
        />
      ) : (
        <Image
          src={slide.imgSrc}
          alt={slide.altText}
        fill
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      )}

      {/* Overlay solo en md+ */}
      <div className="absolute inset-0 bg-black">
        {/* ...resto del código... */}
      </div>
    </div>
  );
};