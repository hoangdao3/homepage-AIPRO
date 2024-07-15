"use client"
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const listRef = useRef();

  const handleThumbnailClick = (index) => {
    setSelectedProject(projects[index]);
    let newIndex = currentVisibleIndex;
    if (index >= currentVisibleIndex + 2) {
      newIndex = index - 2;
    } else if (index < currentVisibleIndex) {
      newIndex = index;
    }
    setCurrentVisibleIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: index * 150, // Adjust height based on your item size including margin
        behavior: 'smooth'
      });
    }
  };

  const handleScrollUp = () => {
    let newIndex = currentVisibleIndex - 1;
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    }
    setCurrentVisibleIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const handleScrollDown = () => {
    let newIndex = currentVisibleIndex + 1;
    if (newIndex >= projects.length) {
      newIndex = 0;
    }
    setCurrentVisibleIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  useEffect(() => {
    scrollToIndex(currentVisibleIndex);
  }, [currentVisibleIndex]);

  return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-7xl px-6 py-12">
      {/* Main Project Section */}
      <div className="w-full lg:w-2/3 px-2">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-96 object-cover"
            src={selectedProject.imageUrl}
            alt={selectedProject.title}
          />
          <div className="p-4 bg-red-600 text-white">
            <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
            <div className="mt-4">
              <p className="font-semibold">Mục tiêu:</p>
              <p>{selectedProject.description}</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Quy mô:</p>
              <p>{selectedProject.productType}</p>
            </div>
            <button className="mt-6 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
              Tìm hiểu thêm →
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail List Section */}
      <div className="w-full lg:w-1/3 px-2 mt-8 lg:mt-0 lg:pl-4 flex flex-col items-center relative">
        <button
          onClick={handleScrollUp}
          className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-red-600 text-white rounded-full z-10"
        >
          ↑
        </button>
        <div className="overflow-hidden h-[32rem] w-full relative" ref={listRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-4 mb-4 cursor-pointer ${selectedProject.title === project.title ? 'border border-red-600' : 'border'}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                className="w-full h-24 object-cover rounded-lg"
                src={project.imageUrl}
                alt={project.title}
              />
              <h3 className="mt-2 font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollDown}
          className="absolute bottom-0 right-0 mb-2 mr-2 p-2 bg-red-600 text-white rounded-full z-10"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

ProjectShowcase.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      productType: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectShowcase;
