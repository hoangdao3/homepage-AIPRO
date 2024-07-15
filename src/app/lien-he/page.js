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
        title="Liên hệ"
        description="Liên hệ với SHN để trở thành đối tác của chúng tôi"
        backgroundImage="/sec1.png"
      />
      <ContactInfo/>
      <CollaborationForm/>
      <Footer />
    </>
  );
}
