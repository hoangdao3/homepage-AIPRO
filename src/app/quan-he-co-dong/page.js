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
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN)"
        backgroundImage="/sec1.png"
      />
      <InformationDisclosure />
      <Footer />
    </>
  );
}
