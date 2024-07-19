"use client"
import React, { useEffect, useRef } from 'react';

const people = [
  {
    name: "Mohamed Sa tị",
    role: "GOAT",
    imageUrl:
      "https://images.news18.com/ibnlive/uploads/2024/07/lionel-messi-crying-2024-07-376990b8e6227d927d72d89f834a2e54.jpg",
  },
  {
    name: "RI văn đỗ",
    role: "Phó goat",
    imageUrl:
      "https://media.gettyimages.com/id/545945904/photo/topshot-portugals-forward-cristiano-ronaldo-reacts-as-portugal-beats-france-1-0-to-clinch-the.jpg?s=612x612&w=gi&k=20&c=w-3CUztotSMCZ0PPs8yOcaretcfftT8-O5JQ9mRmdBw=",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8_cxo6GVvUZWkm-g5nIM83qdA9dUiB-T2A&s",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Teams() {
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const listRef = useRef([]);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    listRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
      listRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            ref={headerRef}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl opacity-0 transition-opacity duration-1000"
          >
            Meet our leadership
          </h2>
          <p
            ref={descriptionRef}
            className="mt-6 text-lg leading-8 text-gray-600 opacity-0 transition-opacity duration-2000"
          >
            Our leadership team is composed of experienced professionals who are dedicated to driving innovation and excellence.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person, index) => (
            <li
              key={person.name}
              ref={(el) => (listRef.current[index] = el)}
              className="opacity-0 transition-opacity duration-1000"
            >
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
}
