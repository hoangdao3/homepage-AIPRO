"use client"
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const NewsGrid = ({ mainNews = [], mostViewed = [], categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name);
  const articleRefs = useRef([]);

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

    articleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      articleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap -mx-6">
        {/* Main News Section */}
        <div className="w-full lg:w-7/12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainNews.map((article, index) => (
              <div
                key={index}
                ref={(el) => (articleRefs.current[index] = el)}
                className="opacity-0 transition-opacity duration-1000 transform scale-95"
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={article.imageUrl}
                    alt={article.title}
                  />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{article.date}</p>
                    <h3 className="mt-2 text-gray-900 font-semibold text-lg">{article.title}</h3>
                    <p className="mt-2 text-gray-600">{article.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-4/12 px-6 mt-12 lg:mt-0">
          {/* Categories Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Danh mục</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`w-full p-4 flex items-center cursor-pointer ${selectedCategory === category.name ? 'bg-red-600 text-white' : 'text-gray-600'}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <i className={`mr-2 ${selectedCategory === category.name ? 'text-white' : 'text-red-600'}`}>{category.icon}</i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Most Viewed Section */}
          <h2 className="text-xl font-bold mb-4">Quan tâm nhiều</h2>
          <div className="space-y-4">
            {mostViewed.map((article, index) => (
              <div
                key={index}
                ref={(el) => (articleRefs.current[mainNews.length + index] = el)}
                className="opacity-0 transition-opacity duration-1000 transform scale-95 flex items-center"
              >
                <img
                  className="h-16 w-16 object-cover rounded-lg"
                  src={article.imageUrl}
                  alt={article.title}
                />
                <div className="ml-4">
                  <h3 className="text-gray-900 font-semibold">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm mt-8" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-500">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
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

NewsGrid.propTypes = {
  mainNews: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  mostViewed: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ),
};

NewsGrid.defaultProps = {
  mainNews: [],
  mostViewed: [],
  categories: [],
};

export default NewsGrid;
