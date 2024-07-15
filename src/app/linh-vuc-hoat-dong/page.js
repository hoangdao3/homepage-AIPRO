import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import FeatureCard from "../components/sec2/FeatureCard";

export default function Linh() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Lĩnh vực hoạt động"
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN)"
        backgroundImage="/sec1.png"
      />
      <FeatureCard
        imageSrc="/anh1.png"
        title="01. THƯƠNG MẠI, XUẤT NHẬP KHẨU HÀNG HÓA"
        description="Kinh doanh thương mại là một trong những lĩnh vực mang lại nguồn doanh thu và lợi nhuận bền vững, ổn định cho SHN. Trong những năm gần đây, SHN đã trở thành nhà cung cấp uy tín nhiều mặt hàng, sản phẩm, nguyên vật liệu cho các đối tác trong và ngoài nước."
        buttonText="Tìm hiểu thêm"
        buttonLink="#"
        imagePosition={1}
      />
      <FeatureCard
        imageSrc="/anh2.png"
        title="02. ĐẦU TƯ PHÁT TRIỂN DỰ ÁN"
        description="Lĩnh vực đầu tư phát triển dự án đã đóng góp giá trị lớn về lợi nhuận cho Công ty. SHN đã tham gia đầu tư vào các dự án đầu tư kinh doanh bất động sản."
        buttonText="Tìm hiểu thêm"
        buttonLink="#"
        imagePosition={2}
      />{" "}
      <FeatureCard
        imageSrc="/anh3.png"
        title="01. THƯƠNG MẠI, XUẤT NHẬP KHẨU HÀNG HÓA"
        description="Kinh doanh thương mại là một trong những lĩnh vực mang lại nguồn doanh thu và lợi nhuận bền vững, ổn định cho SHN. Trong những năm gần đây, SHN đã trở thành nhà cung cấp uy tín nhiều mặt hàng, sản phẩm, nguyên vật liệu cho các đối tác trong và ngoài nước."
        buttonText="Tìm hiểu thêm"
        buttonLink="#"
        imagePosition={1}
      />
      <FeatureCard
        imageSrc="/anh4.png"
        title="02. ĐẦU TƯ PHÁT TRIỂN DỰ ÁN"
        description="Lĩnh vực đầu tư phát triển dự án đã đóng góp giá trị lớn về lợi nhuận cho Công ty. SHN đã tham gia đầu tư vào các dự án đầu tư kinh doanh bất động sản."
        buttonText="Tìm hiểu thêm"
        buttonLink="#"
        imagePosition={2}
      />
      <Footer />
    </>
  );
}
