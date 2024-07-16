"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./RecruitmentSection.module.css";

const RecruitmentSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = [
    { key: "leader", label: "Vị trí lãnh đạo", icon: "/icon1.png" },
    { key: "experience", label: "Cần có kinh nghiệm", icon: "/icon2.png" },
    { key: "graduate", label: "Người mới tốt nghiệp", icon: "/icon3.png" },
    { key: "intern", label: "Tuyển thực tập", icon: "/icon4.png" },
  ];

  const jobListings = [
    {
      title: "Trưởng Phòng Kinh doanh Thương mại – Ban Kinh doanh",
      department:
        "Kinh doanh Thương mại (thang máy và cửa chống cháy và các vật liệu xây dựng)",
      goal: "Xây dựng chiến lược và kế hoạch kinh doanh. Đạt chỉ tiêu kinh doanh, mang lại doanh thu cho công ty.",
      deadline: "15/05/2024",
      location: "Thành phố Hà Nội",
      urgent: true,
      expired: false,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`${styles.recruitmentSection} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.header}>
        <h1 className="text-4xl font-bold">Join AI-PRO Shaping the future</h1>
        <p>
          Cám ơn bạn đã quan tâm đến việc làm tại AI-PRO. Chúng tôi rất mong chờ
          được làm việc cùng bạn và chia sẻ những thành công đầy hứa hẹn.
        </p>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Nhập vị trí chức danh"
          className={`${styles.searchInput} ${styles.leftRounded}`}
        />
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="" className={`${styles.optionInput}`}>
            Chọn lĩnh vực
          </option>
          <option value="finance">Tài chính - Ngân hàng</option>
          <option value="hr">Nhân sự</option>
          <option value="it">Công nghệ thông tin</option>
          <option value="accounting">Kế toán kiểm toán</option>
          <option value="business">Kinh doanh</option>
        </select>
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="">Thời gian làm việc</option>
          <option value="">Thời gian làm việc</option>
          <option value="fulltime">Toàn thời gian</option>
          <option value="parttime">Bán thời gian</option>
        </select>
        <select className={`${styles.searchInput} ${styles.noRounded}`}>
          <option value="">Chọn địa điểm</option>
          <option value="hanoi">Thành phố Hà Nội</option>
          <option value="hcm">Thành phố Hồ Chí Minh</option>
          <option value="danang">Thành phố Đà Nẵng</option>
        </select>
        <button className={`${styles.searchButton} ${styles.rightRounded}`}>
          Tìm kiếm
        </button>
      </div>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div
            key={filter.key}
            className={`${styles.filter} ${
              activeFilter === filter.key ? styles.active : ""
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            <Image
              src={filter.icon}
              alt={filter.label}
              width={32}
              height={32}
            />
            <span>{filter.label}</span>
            {activeFilter === filter.key && (
              <div className={styles.underline}></div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.jobListings}>
        {jobListings.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <div className={styles.jobTags}>
                {job.urgent && <span className={styles.urgent}>Tuyển gấp</span>}
                {job.expired && <span className={styles.expired}>Hết hạn</span>}
              </div>
            </div>
            <div className={styles.jobDetails}>
              <p><strong>Phòng/Bộ phận:</strong> {job.department}</p>
              <p><strong>Mục tiêu công việc:</strong> {job.goal}</p>
              <p><strong>Hạn ứng tuyển:</strong> {job.deadline}</p>
              <p><strong>Địa điểm:</strong> {job.location}</p>
            </div>
            <div className={styles.jobActions}>
              <button className={styles.detailButton}>Chi tiết</button>
              <button className={styles.applyButton}>Ứng tuyển</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentSection;
