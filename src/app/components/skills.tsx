"use client";

import React from "react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import { SkillCard } from "./skill-card";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function   Skills() {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="px-8 mt-20">
      <div className="container mx-auto mb-20 text-center">
        <h1
          ref={headingRef}
          className={`mb-4 text-5xl font-bold text-blue-gray-900 transition-transform duration-1000 ease-out ${
            headingInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
          }`}
        >
          What we do
        </h1>
        <p
          ref={headingRef}
          className={`mx-auto w-full text-lg text-gray-500 lg:w-10/12 transition-transform duration-1000 ease-out ${
            headingInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
          }`}
        >
          AI-PRO specializes in cutting-edge AI development, delivering innovative solutions that drive efficiency and growth for our clients in various industries - demo.
        </p>
      </div>
      <div
        ref={contentRef}
        className={`container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 transition-transform duration-1000 ease-out ${
          contentInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
        }`}
      >
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
