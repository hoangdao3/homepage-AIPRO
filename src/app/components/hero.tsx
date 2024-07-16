"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: linkRef, inView: linkInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="relative min-h-screen w-full bg-[url('/event.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h2
            ref={headingRef}
            className={`text-5xl font-bold text-white md:max-w-full lg:max-w-3xl transition-transform duration-1000 ease-out ${
              headingInView
                ? 'transform translate-y-0 opacity-100'
                : 'transform -translate-y-10 opacity-0'
            }`}
          >
            Introduction,...IntroductionIntroduction
          </h2>
          <p
            ref={paragraphRef}
            className={`mt-6 mb-10 w-full text-lg text-white md:max-w-full lg:max-w-3xl transition-transform duration-1000 ease-out ${
              paragraphInView
                ? 'transform translate-y-0 opacity-100'
                : 'transform translate-y-10 opacity-0'
            }`}
          >
            Our React Course is your gateway to becoming a proficient React
            developer. Learn to build dynamic and interactive web applications
            using one of the most popular JavaScript libraries in the industry.
          </p>
          <div
            ref={linkRef}
            className={`transition-transform duration-1000 ease-out ${
              linkInView
                ? 'transform translate-y-0 opacity-100'
                : 'transform translate-y-10 opacity-0'
            }`}
          >
            <a
              href="/gioi-thieu"
              className="inline-block px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white font-semibold rounded shadow-md transition duration-300 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
