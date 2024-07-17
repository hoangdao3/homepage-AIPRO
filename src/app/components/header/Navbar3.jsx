"use client";

import React, { useState, useEffect } from "react";
import { MdLanguage, MdKeyboardArrowDown, MdPhone, MdSearch } from "react-icons/md";
import { usePathname } from 'next/navigation'
import styles from "./navbar.module.css";  // Corrected path
import { useRouter } from "next/navigation"; // Correct import
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const menuItems = [
  { name: "About", url: "/gioi-thieu" },
  { name: "Focus areas", url: "/linh-vuc-hoat-dong" },
  { name: "Projects", url: "/du-an" },
  { name: "Recruitment", url: "/tuyen-dung" },
  { name: "Contact us", url: "/lien-he" },
];

const Navbar2 = () => {
  const router = useRouter(); // Ensure useRouter is correctly imported and used
  const [language, setLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const currentPath = router.pathname;
  const pathname = usePathname();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = pathname === '/' ? (isScrolling ? 'text-gray-900' : 'text-white') : 'text-gray-900';

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        blurred={false}
        className={`fixed top-0 z-50 border-0 transition-all duration-300 ${
          isScrolling ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
        <a
            href="/"
            className="flex items-start space-x-3 rtl:space-x-reverse flex-grow-0 flex-shrink-0"
            style={{ minWidth: "200px" }} // Adjust this value as needed
          >
            <h2 className={`text-6xl font-bold mr-16 mb-2 ${
              !isScrolling ? "text-white" : "text-[#388bac]"
            }`}>AI-PRO</h2>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 ${textColor} focus:ring-gray-600`}
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={handleOpen}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </button>
          <div className=" w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${textColor} dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className={`block py-2 px-3 rounded ${textColor} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#33A7BF]`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <MdPhone className={`h-5 w-5 ${textColor}`} />
              <span className={textColor}>0813-867-936 {currentPath}</span>
            </span>
            <div className={`flex items-center space-x-1 cursor-pointer ${textColor}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <MdLanguage className={`h-5 w-5 ${textColor}`} />
              <span>{language}</span>
              <MdKeyboardArrowDown className={`h-5 w-5 ${textColor}`} />
            </div>
            <div className={styles.search}>
              <MdSearch className={`h-5 w-5 text-gray-900`} />
              <input type="text" placeholder="Tìm kiếm" className="ml-2 p-1 border rounded"/>
            </div>
          </div>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="flex items-center gap-2 font-medium"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <a href="https://www.material-tailwind.com/blocks" target="_blank">
                <Button color="gray">blocks</Button>
              </a>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
      <div className={pathname !== '/' ? styles.content : ''}>
        {/* Your main content here */}
      </div>
    </>
  );
};

export default Navbar2;
