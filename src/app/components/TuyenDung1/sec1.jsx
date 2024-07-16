"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './RecruitmentSection.module.css';

const RecruitmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: 'Số nhân sự tuyển dụng', value: 26, icon: '/s1.png' },
    { label: 'Người đã ứng tuyển', value: 611, icon: '/s2.png' },
    { label: 'Tuyển dụng mới trong tháng', value: 12, icon: '/s3.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('recruitment-section');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check if section is already in view on initial load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1700;
      stats.forEach((stat, index) => {
        const element = document.getElementById(`count-${index}`);
        if (element) {
          let start = 0;
          const end = stat.value;
          const increment = end / (duration / 50);
          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              element.innerText = end;
              clearInterval(counter);
            } else {
              element.innerText = Math.ceil(start);
            }
          }, 50);
        }
      });
    }
  }, [isVisible, stats]);

  return (
    <div id="recruitment-section" className={`container mx-auto p-6 ${styles.recruitmentSection}`}>
      <div className={`bg-white rounded-lg p-8 flex flex-col md:flex-row items-center ${styles.background}`}>
        <div className={`flex-1 ${isVisible ? styles.slideInFromTop : ''} ${styles.textContainer}`}>
          <h2 className="text-[#33A7BF] mb-2 ml-32">Tuyển dụng</h2>
          <h1 className="text-4xl font-bold mb-4 ml-32">Tham gia SHN -</h1>
          <h1 className="text-4xl font-bold mb-4 ml-32">Định hướng sự nghiệp</h1>

          <a href="#" className="inline-block bg-[#33A7BF] text-white px-4 py-2 ml-32 rounded-md hover:tebgxt-[#33A7BF] transition duration-300">
            Tìm kiếm công việc
          </a>
        </div>
        <div className={`flex-1 flex justify-center items-center relative overflow-hidden ${isVisible ? styles.slideInFromTop : ''}`}>
          <Image src="/background-tuyendung.png" alt="Recruitment" width={500} height={500} />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg flex flex-col items-center ${isVisible ? styles.scaleIn : ''} ${styles.statCard}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.iconAndNumber}>
              <div className={styles.iconContainer}>
                <Image src={stat.icon} alt={stat.label} width={50} height={50} className="mb-4" />
              </div>
              <h3 id={`count-${index}`} className="text-3xl font-bold ml-4">0</h3>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentSection;
