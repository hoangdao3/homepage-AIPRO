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
const rows2 = [
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
    }
  ],
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Giới thiệu"
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN)"
        backgroundImage="/sec1.png"
      />
      <CompanyIntroduction
        imageUrl="/city.jpg"
        title="GIỚI THIỆU CÔNG TY CỔ PHẦN ĐẦU TƯ TỔNG HỢP HÀ NỘI (SHN)"
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN) được thành lập ngày 30/03/2007. Công ty hoạt động trong lĩnh vực công nghiệp, công nghiệp phụ trợ, thương mại dịch vụ, bất động sản và xuất khẩu lao động. SHN đã được khẳng định trên thị trường trong nước và quốc tế với lĩnh vực thương mại dịch vụ công nghiệp. Với kim chỉ nam 'Giá trị bền vững - Kết nối tương lai', SHN đã quy tụ được Ban lãnh đạo có bề dày kinh nghiệm, đội ngũ nhân viên trẻ, năng động và chuyên nghiệp, hình thành một tập thể vững mạnh hoàn thành tốt các mục tiêu sản xuất kinh doanh của Công ty."
      />
      <VisionMissionValues />
      <CompanyIntroduction
        imageUrl="/team1.png"
        title="ĐỊNH HƯỚNG PHÁT TRIỂN"
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN) được thành lập ngày 30/03/2007. Công ty hoạt động trong lĩnh vực công nghiệp, công nghiệp phụ trợ, thương mại dịch vụ, bất động sản và xuất khẩu lao động. SHN đã được khẳng định trên thị trường trong nước và quốc tế với lĩnh vực thương mại dịch vụ công nghiệp. Với kim chỉ nam 'Giá trị bền vững - Kết nối tương lai', SHN đã quy tụ được Ban lãnh đạo có bề dày kinh nghiệm, đội ngũ nhân viên trẻ, năng động và chuyên nghiệp, hình thành một tập thể vững mạnh hoàn thành tốt các mục tiêu sản xuất kinh doanh của Công ty."
      />
      <Teams/>
      <LeadershipTeam title="HỘI ĐỒNG QUẢN TRỊ" rows={rows} />;
      <LeadershipTeam title="BAN ĐIỀU HÀNH" rows={rows2} />;

      <Footer />
    </div>
  );
}
