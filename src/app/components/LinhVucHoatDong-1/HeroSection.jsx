"use client"
import React, { useEffect, useRef, useState } from 'react';

const HeroSection = ({ title, description, backgroundImage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05, // Adjust this value based on when you want the animation to trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-[300px] bg-cover bg-center flex items-center justify-center ${
        isVisible ? 'animate-appear' : 'animate-disappear'
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
