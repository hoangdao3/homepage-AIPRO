"use client"
import React, { useEffect, useRef } from 'react';

const VisionMissionValues = () => {
  const sectionRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-in');
          } else {
            entry.target.classList.remove('scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-start p-10 space-x-8">
      {/* Vision Section */}
      <div
        ref={(el) => (sectionRef.current[0] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission3.png"
          alt="Vision Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">TẦM NHÌN</h3>
        <p className="text-lg leading-relaxed text-left">
          SHN định hướng phát triển trở thành đơn vị kinh tế vững mạnh với uy tín và thương hiệu có sức cạnh tranh tốt trên thị trường trong nước và quốc tế.
        </p>
      </div>

      {/* Mission Section */}
      <div
        ref={(el) => (sectionRef.current[1] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission1.png"
          alt="Mission Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">SỨ MỆNH</h3>
        <p className="text-lg leading-relaxed text-left">
          Xây dựng và đóng góp những giá trị tốt đẹp cho xã hội, cho khách hàng, nâng cao chất lượng cuộc sống cho CBNV Công ty.
        </p>
      </div>

      {/* Core Values Section */}
      <div
        ref={(el) => (sectionRef.current[2] = el)}
        className="max-w-sm transform scale-75 opacity-0 transition-transform transition-opacity duration-1000"
      >
        <img
          src="/mission2.png"
          alt="Values Icon"
          className="mx-auto mb-4 w-16"
        />
        <h3 className="text-2xl font-semibold mb-2 text-left">GIÁ TRỊ CỐT LÕI</h3>
        <p className="text-lg leading-relaxed text-left">
          Đoàn kết – Hợp tác<br />
          Tận tâm – Uy tín<br />
          Hiệu quả – Chuyên nghiệp<br />
          Sáng tạo – Đổi mới
        </p>
      </div>

      <style jsx>{`
        .scale-in {
          transform: scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default VisionMissionValues;
