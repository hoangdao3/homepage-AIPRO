"use client"
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CompanyIntroduction = ({ imageUrl, title, description }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center p-10 space-x-10 mt-8" style={{ marginTop: '50px' }}>
      {/* Image Section */}
      <div
        ref={imageRef}
        className="flex-shrink-0 max-w-md transform scale-100 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src={imageUrl}
          alt="Company Building"
          className="w-10/12 h-auto rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="max-w-lg transform opacity-0 transition-transform transition-opacity duration-1000"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            transform: translateY(20%) scale(1);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes fade-out {
          0% {
            transform: translateY(0) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(20%) scale(1);
            opacity: 0;
          }
        }

        .fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .fade-out {
          animation: fade-out 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

CompanyIntroduction.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CompanyIntroduction;
