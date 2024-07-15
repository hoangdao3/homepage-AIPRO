"use client";

import Image from "next/image";
import styles from "./navbar.module.css";  // Corrected path
import React, { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("VN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const menuItems = [
    { name: "Giới thiệu", url: "/gioi-thieu" },
    { name: "Lĩnh vực hoạt động", url: "/linh-vuc-hoat-dong" },
    { name: "Dự án", url: "/du-an" },
    { name: "Quan hệ cổ đông", url: "/quan-he-co-dong" },
    { name: "Tin tức", url: "/tin-tuc" },
    { name: "Tuyển dụng", url: "/tuyen-dung" },
    { name: "Liên hệ", url: "/lien-he" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50 w-full">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <Image src="/phone.png" alt="Phone" width={16} height={16} />
            <span>(84 - 24) 66526332</span>
          </span>
          <div className={styles.language}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-1 cursor-pointer">
              <Image src="/language.png" alt="Language" width={12} height={12} />
              <span>{language}</span>
              <Image src="/arrowDown.png" alt="Arrow Down" width={12} height={12} />
            </div>
            {isDropdownOpen && (
              <ul className={styles.dropdown}>
                <li onClick={() => handleLanguageChange("VN")}>VN</li>
                <li onClick={() => handleLanguageChange("EN")}>EN</li>
              </ul>
            )}
          </div>
          <div className={styles.search}>
            <Image src="/findLogo.png" alt="Search" width={16} height={16} />
            <input type="text" placeholder="Tìm kiếm" className="ml-2 p-1 border rounded"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
