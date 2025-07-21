  "use client";

  import Image from "next/image";
  import React from "react";

  export const SlideThumbnails = ({ slides, current, setCurrent }) => {


const getThumbnailUrl = (url) => {
  return url.replace("/upload/", "/upload/w_160,h_200,c_fill,f_auto,q_auto/");
};

    return (
      <div className="hidden md:flex absolute bottom-24 right-8 z-20 flex-row gap-4 lg:gap-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative h-32 w-24 lg:h-48 lg:w-32 transition-all duration-300 transform overflow-hidden ${
              index === current
                ? "ring-4 ring-[--azul_brillante] scale-110 brightness-100"
                : "opacity-70 hover:opacity-90 hover:scale-105 brightness-75"
            }`}
          >
            <Image
             src={getThumbnailUrl(slide.imgSrc)}
              alt={slide.altText}
               width={128}
  height={160}          
              className="object-cover rounded-xl shadow-2xl"
            />
          </button>
        ))}
      </div>
    );
  };
