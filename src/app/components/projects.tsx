"use client";

import { ProjectCard } from "./project-card";

const PROJECTS = [
  {
    img: "/image/ai1.png",
    title: "AI-Powered Chatbot",
    desc: "Developed an AI chatbot for customer service that handles inquiries and provides support 24/7.",
  },
  {
    img: "/image/ai2.jpg",
    title: "Predictive Analytics",
    desc: "Implemented predictive analytics for sales forecasting, helping businesses make data-driven decisions.",
  },
  {
    img: "/image/ai3.png",
    title: "Image Recognition System",
    desc: "Created an image recognition system that classifies images with high accuracy for various applications.",
  },
  {
    img: "/image/ai4.png",
    title: "Natural Language Processing (NLP)",
    desc: "Developed NLP models to analyze and understand human language, enhancing text analytics capabilities.",
  },
  {
    img: "/image/ai5.jpg",
    title: "Recommendation Engine",
    desc: "Built a recommendation engine for an e-commerce site, increasing user engagement and sales.",
  },
  {
    img: "/image/ai6.jpg",
    title: "AI-Driven Automation",
    desc: "Automated repetitive tasks using AI, improving efficiency and reducing operational costs.",
  },
  {
    img: "/image/ai7.png",
    title: "Speech Recognition System",
    desc: "Developed a speech recognition system that converts spoken language into text with high accuracy.",
  },
  {
    img: "/image/ai8.jpg",
    title: "AI-Powered Fraud Detection",
    desc: "Implemented an AI system to detect and prevent fraudulent activities in financial transactions.",
  },
];


export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-6xl font-bold text-blue-gray-900">
          Our Projects
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-gray-500 lg:w-6/12">
        Transform your ideas into reality with our expertise in AI and digital solutions.
        From mobile apps to advanced AI systems, we create innovative, custom solutions to meet your needs.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
