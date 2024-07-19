"use client";

import React from "react";
import Image from "next/image";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import FeatureCard from "./feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Innovation",
    description:
      "Harness cutting-edge AI tools and technologies to stay ahead in the competitive market.",
  },
  {
    icon: AcademicCapIcon,
    title: "Collaboration",
    description:
      "Work with a team of experts dedicated to continuous innovation and excellence.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Expertise",
    description: "Benefit from the vast experience and deep knowledge of our seasoned AI professionals.",
  },
];

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="py-28 px-8">
      <div
        ref={ref}
        className={`container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3 transition-transform duration-1000 ease-out ${
          inView ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'
        }`}
      >
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/avt.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <h2 className="mb-4 text-6xl font-bold text-blue-gray-900">
          AI-PRO JOINT STOCK COMPANY
          </h2>
          <p className="mb-5 max-w-lg px-4 text-left text-lg text-gray-500 lg:px-0">
          Founded on April 26, 2023, AI-PRO is a leader in AI technologies, specializing in industry innovation, trade solutions, and advanced services. The company is internationally recognized for its groundbreaking contributions to the AI field.
          </p>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
