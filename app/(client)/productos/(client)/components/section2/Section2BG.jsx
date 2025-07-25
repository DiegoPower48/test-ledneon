"use client";

import React from "react";
import styles from "./productsStyle.module.css"
import { cn } from "@/lib/utils";

export default function GradientBanner() {
  return (
    <div className={cn(styles.gradientbanner)}>
      {/* <div className="white-line"></div> */}
      <div className={cn(styles.gradientline)}></div>
      {/* <div className="white-line"></div> */}
    </div>
  );
}