// function Footer() {
//   return (
//     <footer>
//       <p>© 2026 Sumra Ahmed. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* <h2>Sumra Ahmed</h2> */}

        {/* <p>
          Business Analyst • Application Support Engineer • Angular Developer
        </p> */}

        <div className="footer-socials">

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/https://www.linkedin.com/in/samra-ahmed-418948167/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:YOUR_EMAIL@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Sumra Ahmed. All Rights Reserved.
          </p>

          <a href="#home" className="backToTop">
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;