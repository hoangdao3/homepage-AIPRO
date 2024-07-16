"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      className={`px-8 py-28 transition-transform duration-1000 ease-out ${
        sectionInView ? "transform scale-100 opacity-100" : "transform scale-75 opacity-0"
      }`}
    >
      <div className="container mx-auto text-center">
        <h6 className="mb-8 text-5xl font-semibold text-blue-gray-900">
          Our clients
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
