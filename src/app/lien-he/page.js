import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import ContactInfo from "../components/contactInfo/ContactInfo"
import CollaborationForm from "../components/Contact/Contact"
export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Contact"
        description="Contact AI-PRO to become our partner"
        videoSrc="/sec1Video.mp4"
      />
      <ContactInfo/>
      <CollaborationForm/>
      <Footer />
    </>
  );
}
