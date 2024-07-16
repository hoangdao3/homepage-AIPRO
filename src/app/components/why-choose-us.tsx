"use client";

import React from "react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import BackgroundCard from "./background-card"; // Ensure this path is correct

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="mb-2 md:w-10/12 font-normal text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
  });
  const { ref: descRef, inView: descInView } = useInView({
    threshold: 0.1,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10 mt-20">
      <h2
        ref={titleRef}
        className={`text-center mb-2 text-5xl font-bold text-blue-gray-900 transition-transform duration-1000 ease-out ${
          titleInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
        }`}
      >
        Why choose our course?
      </h2>
      <p
        ref={descRef}
        className={`mb-16 w-full text-center font-normal text-gray-500 lg:w-10/12 transition-transform duration-1000 ease-out ${
          descInView ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'
        }`}
      >
        Discover the unique advantages, benefits, and standout features that set
        our course apart from the rest.
      </p>
      <div
        ref={contentRef}
        className={`mt-8 transition-transform duration-1000 ease-out ${
          contentInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="Expert Instructors">
            Learn from industry professionals with years of hands-on experience
            in React development.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="React Fundamentals">
                Start with the basics. Understand React&apos;s core concepts,
                component structure, and the virtual DOM.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="State and Props">
                Learn how to manage component state and utilize props to pass
                data between components.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Component Lifecycle">
              Dive into the lifecycle of React components and harness its power
              to control your application&apos;s behavior.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
