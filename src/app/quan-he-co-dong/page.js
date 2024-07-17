import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import InformationDisclosure from "../components/quan-he-co-dong/qhcd";

export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Quan hệ cổ đông"
        description="AI-PRO JOINT STOCK COMPANY"
        videoSrc="/sec1Video.mp4"
      />
      <InformationDisclosure />
      <Footer />
    </>
  );
}