"use client"
import { useRef } from 'react';
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import CollaborationForm from "./components/Contact/Contact";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import "./globals.css"; // Import your global styles
import Navbar2 from './components/header/Navbar3';
import Hero from './components/hero';
import WhyChooseUs from './components/why-choose-us';
import Skills from './components/skills';
import Clients from './components/clients';
const Home = () => {
  const videoRef = useRef(null);

  return (
    <>
      <Navbar2 />
      <Hero/>
      <WhyChooseUs/>
      <Skills/>
      <Clients/>
      <CollaborationForm />
      <Footer />
    </>
  );
};

export default Home;
