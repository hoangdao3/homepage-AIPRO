"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CollaborationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const imageRef = useRef(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-red-700 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/4 p-4 md:ml-4"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Hợp tác cùng phát triển</h2>
          <p className="mb-4 text-left">Nếu bạn muốn hợp tác phát triển hoặc trở thành khách hàng, vui lòng nhập các thông tin cần thiết và chờ phản hồi từ chúng tôi.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-4 py-2 border border-white rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-1/2 px-4 py-2 border border-white rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-4 py-2 border border-white rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <textarea
              placeholder="Nội dung"
              className="w-full px-4 py-2 border border-white rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-white text-red-700 rounded-md hover:bg-gray-300 transition duration-300"
            >
              Gửi thông tin
            </button>
          </form>
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 mt-6 md:mt-0 flex justify-center items-start md:mt-12 md:ml-4"
        >
          <img
            src="/img-18.png"
            alt="Collaboration"
            className="w-2/3"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CollaborationForm;
