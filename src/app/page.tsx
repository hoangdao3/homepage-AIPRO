"use client"
import { useRef } from 'react';
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import CollaborationForm from "./components/Contact/Contact";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import "./globals.css"; // Import your global styles

const Home = () => {
  const videoRef = useRef(null);

  return (
    <>
      <Navbar />
      <div ref={videoRef}>
        <BackgroundVideo />
      </div>
      <CollaborationForm />
      <Footer />
    </>
  );
};

export default Home;
