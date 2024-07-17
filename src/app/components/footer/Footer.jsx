import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="mb-4 md:mb-0 w-full md:w-4/6">
              <h2 className="text-6xl font-bold text-[#388BAC] mb-2">AI-PRO</h2>
              <p className="text-md mb-2">
                Innovating Technology ∞ Building the Future
              </p>
              <p className="text-sm">
              We are always passionate, dedicated, and strive to contribute the best values to our shareholders, partners, customers, and society.
              </p>
              <p className="text-xs mt-4">© Copyright belongs to AI-PRO</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
            <div className="mb-4 md:mb-0 md:mr-8">
              <div className="flex items-center mb-2">
                <Image src="/phone.png" alt="Phone" width={32} height={32} />
                <span className="ml-2">0813-867-936</span>
              </div>
              <div
                className="flex items-center mb-2"
                style={{ flex: "0 1 30%" }}
              >
                <Image
                  src="/redAddress.png"
                  alt="Address"
                  width={32}
                  height={32}
                />
                <span className="ml-2">
                  7, Alley 82, Dich Vong Hau Street, Dich Vong Ward, Cau Giay
                  District, Hanoi City, Vietnam
                </span>
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

                <a
                  href="https://www.linkedin.com/company/ai-pro-joint-stock-company/"
                  aria-label="Linkedin"
                >
                  <Image
                    src="/linkedin.png"
                    alt="Linkedin"
                    width={24}
                    height={24}
                  />
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
