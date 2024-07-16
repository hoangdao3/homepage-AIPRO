import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import ProjectShowcase from "../components/project/Project";
import Projects from "../components/projects";
import FeatureCard from "../components/sec2/FeatureCard";
import WhyChooseUs from "../components/why-choose-us";
// const projects = [
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDvh9-X5hf1o7xcWAEmAfxIIMb0V2Qxsylg&s",
//     title: "Dự án Lào Cai Riverside 1",
//     description: "Xây dựng khu nhà ở kiểu mẫu với...",
//     productType:
//       "nhà ở thấp tầng (tối đa 5 tầng) - Linh hoạt giữa ở và kinh doanh",
//   },
//   {
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
//     title: "Dự án Lào Cai Riverside 2",
//     description: "Mô tả dự án New Life Tower...",
//     productType: "nhà ở cao tầng, thương mại và dịch vụ",
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9PMSkHBhJ2-KaGFOp_grvzDsUKQ6y6wDzbg&s",
//     title: "Dự án Lào Cai Riverside 3",

//     description: "Mô tả dự án An Bình City...",
//     productType: "nhà ở cao tầng, tiện ích đô thị",
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Pmq3Gv7y7z_2Xun-OqMIk43kd5u0TXEatw&s",
//     title: "Dự án Lào Cai Riverside 4",
//     description: "Mô tả dự án New Life Tower...",
//     productType: "nhà ở cao tầng, thương mại và dịch vụ",
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqiWTOWOx1BfM7z7qaNBMElF7hlIWkh1zDQ&s",
//     title: "Dự án Lào Cai Riverside 5",

//     description: "Mô tả dự án An Bình City...",
//     productType: "nhà ở cao tầng, tiện ích đô thị",
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj77TTkVsg1BQLA11SAW61h98W2bGX7yGS8g&s",
//     title: "Dự án Lào Cai Riverside 6",

//     description: "Mô tả dự án New Life Tower...",
//     productType: "nhà ở cao tầng, thương mại và dịch vụ",
//   },
//   {
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU-hchAWPjnV8VRKPp5d7OC6RO0GKlZj4bw&s",
//     title: "Dự án Lào Cai Riverside 7",

//     description: "Mô tả dự án An Bình City...",
//     productType: "nhà ở cao tầng, tiện ích đô thị",
//   },
//   // Add more projects as needed
// ];

export default function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Dự án"
        description="Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN)"
        videoSrc="/sec1Video.mp4"
      />
      {/* <WhyChooseUs/> */}

      <Projects/>

      {/* <ProjectShowcase projects={projects} />; */}
      <Footer />
    </>
  );
}
