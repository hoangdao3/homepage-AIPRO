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
    title: "AI Development :",
    children:
      "At AI-PRO, we specialize in developing advanced AI solutions tailored to your specific needs. Our expertise spans various AI technologies, ensuring that we deliver powerful and scalable AI systems that transform your business operations.",
  },
  {
    icon: FingerPrintIcon,
    title: "Optical Character Recognition (OCR)",
    children:
      "Leverage the power of conversational AI with our ChatGPT development services. We create advanced chatbot solutions that can understand and generate human-like responses, improving customer engagement and support.",
  },
  {
    icon: SwatchIcon,
    title: "ChatGPT Development",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: "AI-Powered Data Analysis",
    children:
      "Utilize AI to transform raw data into valuable insights. Our advanced algorithms analyze data to identify patterns, trends, and predictive insights, helping you make informed decisions and stay ahead of the competition.",
  },
  {
    icon: EyeIcon,
    title: "Natural Language Processing",
    children:
      "Enhance your applications with our NLP capabilities. We develop systems that understand, interpret, and generate human language, facilitating better communication and user interaction",
  },
  {
    icon: DocumentTextIcon,
    title: "App and Web Development",
    children:
      "At AI-PRO, we provide comprehensive outsourcing services for app and web development. Our team of skilled developers and designers is dedicated to delivering high-quality, scalable, and secure solutions tailored to your business needs.",
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
          AI-PRO specializes in cutting-edge AI development, delivering innovative solutions that drive efficiency and growth for our clients in various industries.
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
