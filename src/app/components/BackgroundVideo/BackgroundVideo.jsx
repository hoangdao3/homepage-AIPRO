"use client";
import { useRef, useEffect, useState } from 'react';

const BackgroundImage = () => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleLoadedData = () => {
      setLoaded(true);
    };
    if (imgRef.current) {
      imgRef.current.addEventListener('load', handleLoadedData);
      return () => {
        imgRef.current.removeEventListener('load', handleLoadedData);
      };
    }
  }, []);

  return (
    <>
      <div className={`carousel w-full ${loaded ? 'fade-in' : ''}`}>
        <div id="slide1" className="carousel-item relative w-full">
          <img
            ref={imgRef}
            src="/event.jpeg"
            className="w-full"
            alt="Event"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="/#" className="btn btn-circle">
              ❮
            </a>
            <a href="/#" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundImage;
