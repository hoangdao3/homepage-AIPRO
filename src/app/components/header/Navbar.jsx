"use client";

import Image from "next/image";
import styles from "./navbar.module.css"; // Corrected path
import React, { useState } from "react";
import { Button, Collapse } from "@material-tailwind/react";
import { MdKeyboardArrowDown, MdLanguage, MdPhone, MdSearch } from "react-icons/md";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Navbar as MTNavbar,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const menuItems = [
    { name: "About", url: "/introduction" },
    { name: "Focus areas", url: "/areasOfOperation" },
    { name: "Projects", url: "/projects" },
    { name: "Recruitment", url: "/recruitment" },
    { name: "Contact us", url: "/lien-he" },
  ];

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        blurred={false}
        className="fixed top-0 z-50 bg-white"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse flex-grow-0 flex-shrink-0"
            style={{ minWidth: "200px" }}
          >
            <h2 className="text-6xl font-bold mb-2 text-[#388BAC] mr-16">AI-PRO</h2>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-900 focus:ring-gray-600"
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
          <div className="hidden md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:mt-0 md:border-0 text-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#33A7BF]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:flex items-center space-x-2">
              <MdPhone className="h-5 w-5 text-gray-900" />
              <span className="text-gray-900">0813-867-936</span>
            </span>
            <div
              className="hidden md:flex items-center space-x-1 cursor-pointer text-gray-900"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MdLanguage className="h-5 w-5 text-gray-900" />
              <span>{language}</span>
              <MdKeyboardArrowDown className="h-5 w-5 text-gray-900" />
            </div>
            {isDropdownOpen && (
              <ul className={styles.dropdown}>
                <li onClick={() => handleLanguageChange("VN")}>VN</li>
                <li onClick={() => handleLanguageChange("EN")}>EN</li>
              </ul>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className={styles.search}>
              <MdSearch className="h-5 w-5 text-gray-900" />
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="ml-2 p-1 border rounded"
              />
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
              <a
                href="https://www.material-tailwind.com/blocks"
                target="_blank"
              >
                <Button color="gray">blocks</Button>
              </a>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
    </>
  );
};

export default Navbar;
