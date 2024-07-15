"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";

const InformationDisclosure = () => {
  const [activeItem, setActiveItem] = useState("Công bố thông tin");

  const sidebarItems = [
    "Công bố thông tin",
    "Báo cáo tài chính",
    "Đại hội đồng cổ đông",
    "Báo cáo thường niên & quản trị",
    "Điều lệ & quy chế",
    "Bản tin nhà đầu tư",
    "Thông tin mời thầu",
  ];

  const mainContentItems = [
    {
      title: "Công bố thông tin về việc ký hợp đồng kiểm toán",
      date: "24/06/2024",
      pdfLink: "/CSDL_Ch1",
      fileName: "23.CBTT.SHN.2024 24.06.2024 CBTT về ký hợp đồng kiểm toán",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
    {
      title:
        "Công bố thông tin về việc tham gia đấu giá tài sản trên đất gắn với quyền sử dụng đất để lựa chọn nhà đầu tư thực hiện dự án tại Lào Cai",
      date: "07/06/2024",
      pdfLink: "/example3.pdf",
      fileName:
        "21.2024.CBTT.SHN 07.06.2024 Công bố thông tin về việc tham gia đấu giá tài sản trên địa bàn đất gắn với quyền sử dụng đất để lựa chọn nhà đầu tư thực hiện dự án Tổ hợp tại Lào Cai",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
    {
      title:
        "Công bố thông tin về việc góp vốn thành lập công ty con trong lĩnh vực năng lượng mới",
      date: "21/06/2024",
      pdfLink: "/example2.pdf",
      fileName:
        "22.2024.CBTT.SHN. Công bố thông tin thành lập công ty con trong lĩnh vực năng lượng mới",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-4 border-r ml-[10%]">
        {" "}
        {/* Added ml-[10%] to move it right */}
        <ul>
          {sidebarItems.map((item) => (
            <li key={item} className="mb-2">
              <button
                onClick={() => setActiveItem(item)}
                className={`flex items-center px-4 py-2 rounded-lg w-full text-left ${
                  activeItem === item
                    ? "bg-red-600 text-white"
                    : "text-gray-600"
                }`}
              >
                <i className="mr-2">📊</i>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-2/4 p-4">
        <div className="space-y-4">
          {mainContentItems.map((content) => (
            <div key={content.title} className="p-4 bg-white border rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{content.title}</h3>
              </div>
              <p className="text-sm text-gray-500">{content.date}</p>
              <a
                href={content.pdfLink}
                target="_blank"
                className="flex items-center underline"
              >
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="mr-2 text-red-600"
                />
                {content.fileName}
                <a
                  href={content.pdfLink}
                  target="_blank"
                  download
                  className="ml-2 text-red-600"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">10</span>
        of
        <span className="font-medium">97</span>
        results
      </p>
    </div>
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-600">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default InformationDisclosure;
