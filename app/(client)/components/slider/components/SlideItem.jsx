"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  const slide = slides[current];
  const isFirst = current === 0;

  // Detecta si es móvil (puedes mejorar esto con un hook de ventana si lo necesitas)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const mainImgSrc = isFirst
    ? isMobile
      ? "/home/logo_mlg_letras_doradas_con_iluminacion_mobile.webp"
      : "/home/logo_mlg_letras_doradas_con_iluminacion.webp"
    : slide.imgSrc;

  return (
    <div className="absolute inset-0 bg-black">
      <Image
        src={mainImgSrc}
        alt={isFirst ? "Logotipo dorado iluminado de MLG en pared de oficina" : slide.altText}
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

      {/* Overlay solo en md+ */}
      <div className="hidden md:block absolute inset-0 bg-black/30 pointer-events-none z-10" />
    </div>
  );
};