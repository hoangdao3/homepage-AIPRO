import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import HeroSection from "../components/LinhVucHoatDong-1/HeroSection";
import NewsGrid from "../components/news/News";
import ArticleGrid from "../components/news/News";

const mainNews = [
  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bo8HyLB1ivrtC-YmkxGKCSU4cXmpMRzzFQ&s",
  },
  {
    date: "19/06/2024",
    title: "Luật Đất đai 2024 khai mở cơ hội lớn cho thị trường BĐS",
    description:
      "Luật Đất đai 2024 sau khi được áp dụng sẽ giúp “thanh lọc” thị trường, gia tăng tính cạnh tranh, để tồn tại các doanh nghiệp buộc phải hoạt động chuyên...",
    imageUrl: "https://cdn-imgix.headout.com/tour/12449/TOUR-IMAGE/d40f6e72-a95b-4043-b85d-e065093828d8-6871-dubai-img-worlds-of-adventure-vip-experience-03.jpg?auto=format&w=713.0666666666667&h=458.4&q=90&ar=14%3A9&crop=faces",
  },
  {
    date: "18/03/2024",
    title:
      "Từ những chuyển biến trong vi mô đến cơ hội cho doanh nghiệp trong các lĩnh vực xuất khẩu, BĐS khu công nghiệp, FMCG...",
    description: "Từ những chuyển biến trong kinh tế vi mô đến...",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg",
  },
  {
    date: "13/03/2024",
    title:
      "Nâng cao năng lực cạnh tranh và mức độ ổn định của hệ thống ngân hàng",
    description: "Summary International economic integration not only...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bo8HyLB1ivrtC-YmkxGKCSU4cXmpMRzzFQ&s",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://www.imgacademy.com/sites/default/files/2016-performance-about.jpg",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://cdn-imgix.headout.com/tour/12449/TOUR-IMAGE/d40f6e72-a95b-4043-b85d-e065093828d8-6871-dubai-img-worlds-of-adventure-vip-experience-03.jpg?auto=format&w=713.0666666666667&h=458.4&q=90&ar=14%3A9&crop=faces",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtY9h2w3jXweLH-oV--lk2MRYoNTKMYj7zQ&s",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://www.imgacademy.com/sites/default/files/2016-performance-about.jpg",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&s",
  },  {
    date: "19/06/2024",
    title:
      "Đơn giản hóa thủ tục cho những thửa đất chưa được đăng ký, cấp giấy chứng nhận",
    description:
      "Phó Thủ tướng Trần Hồng Hà gợi mở một số giải pháp xử lý những thửa đất chưa được đăng ký, cấp giấy chứng nhận như tiếp tục đơn giản hóa thủ tục; miễn...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gBFQUzHGPmzWRpMe2CDA0UjUnEAYSsTJsQ&s",
  },
  // More articles...
];
const categories = [
    {
      name: "Tất cả",
      icon: <i className="fas fa-th"></i>,
    },
    {
      name: "Tin tức xã hội",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Tin tức nội bộ",
      icon: <i className="fas fa-building"></i>,
    },
  ];
const mostViewed = [
  {
    title:
      "Nâng cao năng lực cạnh tranh và mức độ ổn định của hệ thống ngân hàng",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gBFQUzHGPmzWRpMe2CDA0UjUnEAYSsTJsQ&s",
  },
  {
    title:
      "Luật Đất đai 2024: Phân cấp triệt để, bảo đảm quyền lợi của người dân và doanh nghiệp",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&s",
  },
  {
    title:
      "Từ những chuyển biến trong vi mô đến cơ hội cho doanh nghiệp trong các lĩnh vực...",
    imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg",
  },
  {
    title: "SHN TỔ CHỨC CHƯƠNG TRÌNH TÔN VINH PHỤ NỮ VIỆT 8/3/2024",
    imageUrl: "https://www.imgacademy.com/sites/default/files/2016-performance-about.jpg",
  },
];

export default function News() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Tin tức"
        description="Cập nhật những thông tin mới nhất tại SHN"
        videoSrc="/sec1Video.mp4"
      />
      <NewsGrid mainNews={mainNews} mostViewed={mostViewed}categories={categories} />;
      <Footer />
    </>
  );
}
