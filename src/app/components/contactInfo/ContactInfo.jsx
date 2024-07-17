"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }

    if (rightRef.current) {
      observer.observe(rightRef.current);
    }

    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        observer.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <div
      className="container mx-auto p-6"
      style={{
        backgroundImage: '/anh1.png', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center bg-white bg-opacity-90 p-8 rounded-lg">
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/4 pr-4 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-black mb-4">Contact Info</h2>
          <div className="mb-4 flex items-center">
            <img src="/redAddress.png" alt="Address" className="w-8 h-8 mr-2" />
            <div>
              <h3 className="text-lg font-semibold" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif' }}>Address</h3>
              <p className="text-base">7, Alley 82, Dich Vong Hau Street, Dich Vong Ward, Cau Giay District, Hanoi City, Vietnam</p>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <img src="/phone.png" alt="Phone" className="w-8 h-8 mr-2" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-base">(84 - 24) 66526332</p>
            </div>
          </div>
          <div className="flex space-x-4 ">
            <a href="https://www.linkedin.com/company/ai-pro-joint-stock-company/" className="text-gray-600 hover:text-[#33A7BF]">
              <img src="/linkedin.png" alt="Facebook" className="w-10 h-10" />
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8"
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=7,+Alley+82,+Dich+Vong+Hau+Street,+Dich+Vong+Ward,+Cau+Giay+District,+Hanoi+City,+Vietnam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
