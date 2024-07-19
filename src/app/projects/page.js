import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/areasOfOperation/HeroSection";
import ProjectShowcase from "../components/project/Project";
import Projects from "../components/projects";
export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Projects"
        description="AI-PRO JOINT STOCK COMPANY"
        videoSrc="/sec1Video.mp4"
      />
      <Projects/>
      <Footer />
    </>
  );
}
