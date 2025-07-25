"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from 'next/navigation';
import styles from"./productoStyles.module.css";
import { cn } from "@/lib/utils";

export default function Banner() {
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { triggerOnce: true, threshold: 0.5 });
  const router = useRouter();

  return (
    <div className={cn(styles.bgblack, "w-full h-[600px] flex items-center justify-center")}>
      {/* Contenedor de la imagen del aro */}
      <motion.div
        ref={circleRef}
        className={cn(styles.circlecontainer,"z-0")}
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: -360 } : {}}
        transition={{ duration: 20, ease: "linear" }}
      />

      {/* Texto principal */}
      <motion.div
        className="text-center space-y-1 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <p className={cn("text-lg", styles.textcolor)}>¿Quieres</p>
        <h1 className={cn("text-6xl", styles.neontext)}>ILUMINAR</h1>
        <p className={cn("text-6xl", styles.neontext)}>TU VIDA?</p>

        <br />

        <button onClick={()=> router.push("/contacto")}>
          Pide Ya!
          <div className={styles.arrowwrapper}>
            <div className={styles.arrow}></div>
          </div>
        </button>
      </motion.div>
    </div>
  );
}
