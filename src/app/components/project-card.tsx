import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`bg-transparent shadow-none flex flex-col items-center transition-transform duration-500 ease-out ${
        inView ? "transform scale-100 opacity-100" : "transform scale-75 opacity-0"
      }`}
    >
      <div className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-lg w-full">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-0 text-center flex flex-col items-center flex-grow">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">
          {desc}
        </p>
        <button className="bg-gray-500 text-white py-2 px-4 rounded mt-auto">
          see details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
