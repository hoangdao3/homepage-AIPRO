"use client"
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LeadershipTeam = ({ title, rows }) => {
  const memberRefs = useRef([]);

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

    memberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      memberRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          ĐỘI NGŨ LÃNH ĐẠO
        </h2>
        <p className="text-center text-gray-500">{title}</p>
        <div className="mt-10 flex flex-col items-center space-y-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-16">
              {row.map((member, index) => (
                <div
                  key={member.name}
                  ref={(el) => (memberRefs.current[rowIndex * row.length + index] = el)}
                  className="opacity-0 transition-opacity duration-1000 text-center"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="mx-auto h-32 w-32 rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.role}</h3>
                  <p className="text-red-600">{member.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .fade-out {
          animation: fadeOut 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

LeadershipTeam.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
};

LeadershipTeam.defaultProps = {
  rows: [],
};

export default LeadershipTeam;
