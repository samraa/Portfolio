import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-title">

        <h2>Get In Touch</h2>

        <p>
          I'm always open to discussing new opportunities,
          freelance work, collaborations or simply connecting.
        </p>

      </div>

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <div className="info-card">

            <FaEnvelope className="icon"/>

            <div>

              <h3>Email</h3>

              <p>sumraahmed1990@gmail.com</p>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt className="icon"/>

            <div>

              <h3>Phone</h3>

              <p>+92 334 5442675</p>
              <p>+971 54 372 2441</p>

            </div>

          </div>

          <div className="info-card">

            <FaMapMarkerAlt className="icon"/>

            <div>

              <h3>Location</h3>

              <p>Rawalpindi, Pakistan</p>

            </div>

          </div>

          <div className="socials">

            <a href="https://www.linkedin.com/in/samra-ahmed-418948167/">
              <FaLinkedin/>
            </a>

            <a href="#">
              <FaGithub/>
            </a>

          </div>

        </div>

        {/* Right */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Sumra Ahmed"
          />

          <input
            type="email"
            placeholder="sumraahmed1990@gmail.com"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows={6}
            placeholder="Write your message..."
          ></textarea>

          <button>

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;