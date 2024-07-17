import AboutUs from "../components/aboutus";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import FeatureCard from "../components/sec2/FeatureCard";

export default function Linh() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Business areas"
        description="AI-PRO JOINT STOCK COMPANY"
        videoSrc="/sec1Video.mp4"
      />
      <AboutUs/>

      <FeatureCard
        imageSrc="/anh1.png"
        title="01. AI Development"
        description="AI-PRO specializes in cutting-edge AI development, delivering innovative solutions that drive efficiency and growth for our clients in various industries."
        buttonText="Learn More"
        buttonLink="#"
        imagePosition={1}
      />
      <FeatureCard
        imageSrc="/anh2.png"
        title="02. OCR"
        description="Our OCR technology streamlines data extraction from documents, enhancing accuracy and saving time for businesses in need of efficient data management."
        buttonText="Learn More"
        buttonLink="#"
        imagePosition={2}
      />
      <FeatureCard
        imageSrc="/anh3.png"
        title="03. ChatGPT Development"
        description="AI-PRO excels in developing advanced ChatGPT solutions, enabling intelligent and seamless communication for customer service, virtual assistants, and more."
        buttonText="Learn More"
        buttonLink="#"
        imagePosition={1}
      />
      <FeatureCard
        imageSrc="/anh4.jpg"
        title="04. Web and App Development"
        description="Our team creates high-quality web and mobile applications, tailored to meet the unique needs of businesses and enhance user experiences."
        buttonText="Learn More"
        buttonLink="#"
        imagePosition={2}
      />
      <Footer />
    </>
  );
}
