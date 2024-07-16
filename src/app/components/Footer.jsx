"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <h1 className={styles.SHN}>SHN</h1>
            <p className={styles.slogan}>
              Giá trị bền vững ∞ Kết nối tương lai
            </p>
          </div>
          <p className={styles.description}>
          AI-PRO JOINT STOCK COMPANY
            <br />
            “Luôn tâm huyết, nhiệt thành, nỗ lực hết mình để cống hiến những giá
            trị tốt đẹp cho cổ đông, đối tác, khách hàng và xã hội.”
          </p>
          <p className={styles.copyright}>© Bản quyền thuộc về SHN</p>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactColumn}>
            <div className={styles.contactItem}>
              <img src="/redPhone.png" alt="Phone" className={styles.contactIcon} />
              <div>
                <p id="phoneLabel" c className={styles.contactLabel}>Điện thoại</p>
                <p>(84 – 24) 66526332</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src="/redAddress.png" alt="Location" className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel } >Địa chỉ</p>
                <p>
                  7, Alley 82, Dich Vong Hau Street,
                  <br />
                  Dich Vong Ward, Cau Giay District,
                  <br />
                  Hanoi City, Vietnam
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src="/redEmail.png" alt="Email" className={styles.contactIcon} />
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p>Info@shn.com.vn</p>
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <h3>Mạng xã hội</h3>
            <p>Theo dõi chúng tôi trên các phương tiện</p>
            <div className={styles.icons}>
              <a href="https://www.youtube.com/">
                <img src="/youtube.png" alt="YouTube" />
              </a>
              <a href="https://www.facebook.com/">
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
