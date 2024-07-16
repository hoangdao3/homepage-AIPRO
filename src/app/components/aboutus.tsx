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
    title: "Điểm mạnh A",
    description:
      "Apply your knowledge to real-world projects, building a robust portfolio.",
  },
  {
    icon: AcademicCapIcon,
    title: "Điểm mạnh B",
    description:
      "React developers are in high demand and this course is designed for you!",
  },
  {
    icon: CheckBadgeIcon,
    title: "Điểm mạnh C",
    description: "Access course materials whenever it suits your schedule.",
  },
];

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Tỉ lệ phần tử cần phải hiện diện để được coi là inView
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
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <h2 className="mb-4 text-6xl font-bold text-blue-gray-900">
          AI-PRO JOINT STOCK COMPANY
          </h2>
          <p className="mb-5 max-w-lg px-4 text-left text-lg text-gray-500 lg:px-0">
          AI-PRO was founded on April 26, 2023. Specializing in AI technologies, the company operates within sectors including industry innovation, trade solutions, and advanced services. AI-PRO has garnered recognition both domestically and internationally for its pioneering contributions to the AI industry. - demo
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
