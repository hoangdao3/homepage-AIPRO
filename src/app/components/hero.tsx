"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/event.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
          >
            Introduction,...IntroductionIntroduction
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          >
            Our React Course is your gateway to becoming a proficient React
            developer. Learn to build dynamic and interactive web applications
            using one of the most popular JavaScript libraries in the industry.
          </Typography>
          <div>
            <Button variant="gradient" color="white">
              <a href="/gioi-thieu">About us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
