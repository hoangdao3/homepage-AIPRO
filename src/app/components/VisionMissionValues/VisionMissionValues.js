"use client"
import React, { useEffect, useRef } from 'react';

const VisionMissionValues = () => {
  const sectionRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-in');
          } else {
            entry.target.classList.remove('scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-start p-10 space-x-8 style={{ marginTop: '1000px' }}">
      {/* Vision Section */}
      <div
        ref={(el) => (sectionRef.current[0] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission3.png"
          alt="Vision Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">VISION</h3>
        <p className="text-lg leading-relaxed text-left">
          AI-PRO strives to establish itself as a robust economic entity with a distinguished reputation and competitive brand presence in both domestic and global AI markets.
        </p>
      </div>

      {/* Mission Section */}
      <div
        ref={(el) => (sectionRef.current[1] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission1.png"
          alt="Mission Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">MISSION</h3>
        <p className="text-lg leading-relaxed text-left">
        AI-PRO aims to build and contribute significant value to society and customers, enhancing the quality of life for our employees.
        </p>
      </div>

      {/* Core Values Section */}
      <div
        ref={(el) => (sectionRef.current[2] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission2.png"
          alt="Values Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">CORE VALUES</h3>
        <p className="text-lg leading-relaxed text-left">
          Unity – Collaboration<br />
          Dedication – Integrity<br />
          Efficiency – Professionalism<br />
          Creativity – Innovation
        </p>
      </div>

      <style jsx>{`
        .scale-in {
          transform: scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default VisionMissionValues;
