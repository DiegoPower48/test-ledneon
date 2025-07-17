"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slides, current }) => {
  return (
 <>
 {slides.map((slide, index) => {
  const isActive = index === current;
  const isFirst = index === 0;

  return (
    <div
      key={index}
      className={`absolute inset-0 ${isActive ? "" : "hidden"}`}
    >
      {isFirst ? (
        <img
          src="/home/logo_mlg_letras_doradas_con_iluminacion.webp"
          alt="Logotipo dorado iluminado de MLG en pared de oficina"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            filter: "brightness(75%)",
          }}
        />
      ) : (
        <img
          src={slide.imgSrc}
          alt={slide.altText}
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            filter: "brightness(75%)",
          }}
        />
      )}
      {/* Borde izquierdo borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />

      {/* Borde derecho borroso - visible solo en pantallas md+ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-16 bg-black/10 backdrop-blur-sm pointer-events-none z-10" />
   </div>
  );
})}
</>


  );
};
