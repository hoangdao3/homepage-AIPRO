"use client"
import { useRef, useEffect, useState } from 'react';

const BackgroundVideo = () => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLoadedData = () => {
      setLoaded(true);
    };
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      return () => {
        videoRef.current.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const handleRestartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className={`carousel w-full ${loaded ? 'fade-in' : ''}`}>
        <div id="slide1" className="carousel-item relative w-full">
          <video
            ref={videoRef}
            src="/background-video.mp4"
            className="w-full"
            loop
            muted
            autoPlay
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="/#" className="btn btn-circle" onClick={handleRestartVideo}>
              ❮
            </a>
            <a href="/#" className="btn btn-circle" onClick={handleRestartVideo}>
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
