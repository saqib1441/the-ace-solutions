"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/hero.json"; // Adjust the path

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="h-[500px] sm:h-[450px] lg:h-[500px]"
    />
  );
};

export default LottieAnimation;
