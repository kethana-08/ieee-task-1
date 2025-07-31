import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
     <div className="footer-right">
  <div className="footer-contact">
    <p className="contact-heading">Contact Us</p>
    <p>
      📞 General: <a href="tel:+911234567890">+91 12345 67890</a><br />
      ❓ FAQs: <a href="tel:+919876543210">+91 98765 43210</a>
    </p>
  </div>


     <div className="footer-social">
  <p className="follow-text">Follow us</p>
  <div className="social-icons">
    <a href="https://www.facebook.com/IEEE.org/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://www.instagram.com/ieee_manit?utm_source=ig_web_button_share_sheet&igsh=M2M0Y2JmOTAyOA==" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://www.linkedin.com/in/ieee-manit-student-branch-992974221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faXTwitter} />
    </a>
  </div>
</div>
 <p>&copy; 2025 IEEE Web Bootcamp</p>
 </div>
    </footer>
  );
}

 