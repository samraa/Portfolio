import "./Certifications.css";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Cer1 from "../../assets/images/certificate1.jpeg";
import Cer2 from "../../assets/images/certificate2.jpeg";
import Cer3 from "../../assets/images/certificate3.jpeg";

const certificates = [
  {
    title: "CCNA",
    issuer: "Corvit Systems",
    image: Cer1,
  },
 
  {
    title: "Outstanding Performance",
    issuer: "Army Public School HeadQuater Pasban",
    image: Cer2,
  },
   {
    title: "IELTS",
    issuer: "AEO",
    image: Cer3,
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="section-heading">
        <h2>Certifications & Appreciations</h2>
        <p>
          A collection of certifications, awards, and appreciation letters
          earned throughout my professional journey.
        </p>
      </div>

      <div className="cert-container">

        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>

            <div className="cert-image">
<img src={cert.image} alt={cert.title} />

            </div>

            <div className="cert-content">

              <div className="cert-icon">
                <FaAward />
              </div>

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

            <a
  href={cert.image}
  target="_blank"
  rel="noopener noreferrer"
  className="view-btn"
>
  View Certificate
  <FaExternalLinkAlt />
</a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Certifications;