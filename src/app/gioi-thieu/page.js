import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import CompanyIntroduction from "../components/CompanyInfo/CompanyIntroduction";
import VisionMissionValues from "../components/VisionMissionValues/VisionMissionValues";
import Teams from "../components/OurTeam/OurTeam"
import LeadershipTeam from "../components/teamStructure/teamStructure"
const rows = [
  [
    {
      name: "Hoàng Trọng Diễm",
      role: "CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  [
    {
      name: "Lê Hữu Tú",
      role: "THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Vũ Thắng",
      role: "THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  [
    {
      name: "Lê Hữu Tú",
      role: "THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Vũ Thắng",
      role: "THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },    {
      name: "Vũ Thắng",
      role: "THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Introduce"
        description="AI-PRO JOINT STOCK COMPANY"
        videoSrc="/sec1Video.mp4"
      />
      <CompanyIntroduction
        imageUrl="https://static.scientificamerican.com/sciam/cache/file/B5EEA99B-9A70-44CC-B41AFC2EF100377A_source.jpg?w=600"
        title="INTRODUCING AI-PRO"
        description="AI-PRO was founded on April 26, 2023. Specializing in AI technologies, the company operates within sectors including industry innovation, trade solutions, and advanced services. AI-PRO has garnered recognition both domestically and internationally for its pioneering contributions to the AI industry. Guided by the principle of 'Innovative Solutions for a Connected Future,' AI-PRO boasts a seasoned Board of Directors and a dedicated team of young, dynamic professionals, ensuring the achievement of our strategic goals in technological advancement and business excellence."
      />
      <VisionMissionValues />
      <CompanyIntroduction
        imageUrl="/team1.png"
        title="Development Orientation"
        description="AI-PRO Joint Stock Company was established on June 26, 2023. The company specializes in the field of artificial intelligence (AI). AI-PRO has established a strong presence in both domestic and international markets with its innovative AI solutions. Guided by the motto.Sustainable Value – Connecting the Future, AI-PRO has assembled a leadership team with extensive experience and a dynamic, professional staff, forming a robust collective that successfully achieves the company's production and business goals."
      />
      <Teams/>
      <LeadershipTeam title="HỘI ĐỒNG QUẢN TRỊ" rows={rows} />;
      <Footer />
    </div>
  );
}
