"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './FeatureCard.module.css'; // Import the CSS module

const FeatureCard = ({ imageSrc, title, description, buttonText, buttonLink, imagePosition }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this value based on when you want the animation to trigger
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`max-w-7xl mx-auto flex flex-col ${imagePosition === 1 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center p-4 bg-white rounded-md`}
    >
      <div className={`w-full md:w-1/2 p-2 ${isVisible ? (imagePosition === 1 ? styles.appearFromLeft : styles.appearFromCenterLeft) : ''}`}>
        <Image
          src={imageSrc}
          alt={title}
          width={620}
          height={385}
          className="rounded-md"
        />
      </div>
      <div className={`w-full md:w-1/2 p-8 ${isVisible ? (imagePosition === 1 ? styles.appearFromRight : styles.appearFromCenterRight) : ''}`}>
        <h2 className="text-black text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={buttonLink} className="inline-block bg-[#33A7BF] text-white px-4 py-2 rounded-md hover:bg-[#33A7BF] transition duration-300">
          {buttonText} &rarr;
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
