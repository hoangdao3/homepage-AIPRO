"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './herosection.module.css';

const HeroSection = ({ title, description, videoSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
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
      } ${styles['hero-section']}`}
    >
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
