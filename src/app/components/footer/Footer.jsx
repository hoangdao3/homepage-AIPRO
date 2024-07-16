import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-6xl font-bold text-[#33A7BF] mb-2">AI-PRO</h2>
            <p className="text-lg mb-2">Giá trị bền vững ∞ Kết nối tương lai</p>
            <p className="text-sm">
              Công ty Cổ phần Đầu tư Tổng hợp Hà Nội (SHN) “Luôn tâm huyết, nhiệt thành, nỗ lực hết mình để cống hiến những giá trị tốt đẹp cho cổ đông, đối tác, khách hàng và xã hội.”
            </p>
            <p className="text-xs mt-4">© Bản quyền thuộc về SHN</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
            <div className="mb-4 md:mb-0 md:mr-8">
              {/* <h3 className="text-lg font-semibold mb-2">Liên hệ</h3> */}
              <div className="flex items-center mb-2">
                <Image src="/phone.png" alt="Phone" width={32} height={32} />
                <span className="ml-2">(00 - 00) 00000000</span>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/redAddress.png" alt="Address" width={32} height={32} />
                <span className="ml-2">7, Alley 82, Dich Vong Hau Street, Dich Vong Ward, Cau Giay District, Hanoi City, Vietnam</span>
              </div>
              <div className="flex items-center">
                <Image src="/redEmail.png" alt="Email" width={32} height={32} />
                <span className="ml-2">hr-admin@aipro-tech.com</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <p className="mb-2">Follow us on social networking fanpages</p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E" aria-label="YouTube">
                  <Image src="/youtube.png" alt="YouTube" width={36} height={36} />
                </a>
                <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E" aria-label="Facebook">
                  <Image src="/facebook.png" alt="Facebook" width={36} height={36} />
                </a>
                <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E" aria-label="Instagram">
                  <Image src="/instagram.png" alt="Instagram" width={36} height={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
