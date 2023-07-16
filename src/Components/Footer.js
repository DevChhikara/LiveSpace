import React from "react";
import "./Footer.css";
import CompanyLogo from "../assets/company.png";
const Footer = () => {
  return (
    <div className="footer-main-box">
      <div className="footer-logo-and-links">
        <img
          className="footer-company-logo"
          src={CompanyLogo}
          alt="company-logo"
        ></img>
        <div className="footer-links">
          <div>
            <p className="footer-links-heading">Quick Links</p>
            <p className="footer-links-subheading">About Us</p>
            <p className="footer-links-subheading">Services</p>
            <p className="footer-links-subheading">Portfolio</p>
            <p className="footer-links-subheading">Testimonials</p>
            <p className="footer-links-subheading">Blog</p>
            <p className="footer-links-subheading">Contact Us</p>
            <p className="footer-links-subheading">FAQ</p>
          </div>
          <div>
            <p className="footer-links-heading">Conditions</p>
            <p className="footer-links-subheading">Privacy Policy</p>
            <p className="footer-links-subheading">Terms and Conditions</p>
            <p className="footer-links-subheading">Cookie Policy</p>
          </div>
        </div>
      </div>
      <div className="footer-details-section">
        <div className="footer-arrow">
          <p className="footer-main-text">Get in Touch</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="70"
            viewBox="0 0 59 70"
            fill="none"
          >
            <path
              d="M48.6481 0.0951899L11.5821 6.01396C10.6032 6.18776 9.73171 6.73909 9.15537 7.54919C8.57902 8.35929 8.34392 9.36335 8.50069 10.3451C8.65746 11.3269 9.19356 12.2078 9.99352 12.7981C10.7935 13.3885 11.7933 13.641 12.7776 13.5013L40.8048 9.02586L1.67946 63.0209C1.0894 63.8352 0.846996 64.8505 1.00556 65.8436C1.16413 66.8366 1.71069 67.726 2.52499 68.316C3.3393 68.9061 4.35465 69.1485 5.34768 68.9899C6.34071 68.8313 7.23008 68.2848 7.82014 67.4705L46.9455 13.4755L51.4209 41.5027C51.4917 42.0011 51.661 42.4805 51.919 42.9129C52.177 43.3452 52.5185 43.7219 52.9236 44.0208C53.3287 44.3198 53.7893 44.535 54.2785 44.6541C54.7677 44.7731 55.2757 44.7935 55.7729 44.7142C56.2701 44.6348 56.7465 44.4572 57.1743 44.1917C57.6021 43.9262 57.9727 43.5782 58.2646 43.168C58.5564 42.7577 58.7637 42.2935 58.8742 41.8023C58.9847 41.3111 58.9963 40.8028 58.9083 40.3071L52.9895 3.24106C52.8308 2.24825 52.2843 1.35911 51.4702 0.769174C50.656 0.179236 49.6409 -0.0632003 48.6481 0.0951899Z"
              fill="#E8E3DF"
            />
          </svg>
        </div>
        <div className="footer-info">
          <p className="footer-secondary-text-1">Email</p>
          <p className="footer-secondary-text-2">support@dreamwell.com</p>
          <div className="footer-horizontal-rule"></div>
          <p className="footer-secondary-text-1">Phone</p>
          <p className="footer-secondary-text-2">123-456-7890</p>
          <div className="footer-horizontal-rule"></div>
          <p className="footer-secondary-text-1">Address</p>
          <p className="footer-secondary-text-2">
            {" "}
            123 Anywhere St., Any City,<br></br> 12345 Any State
          </p>
          <div className="footer-horizontal-rule"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
