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
          width={1920}
          height={1080}
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
        <img
          src={slide.imgSrc}
          alt={slide.altText}
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      )}

      {/* Overlay oscuro para mejorar contraste, sin filtros ni blur */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  );
};