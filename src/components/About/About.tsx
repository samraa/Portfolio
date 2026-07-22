import { FaUserTie, FaLaptopCode, FaHeadset } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="title">
        <h2>About Me</h2>
        <p>
          Passionate Software Engineer with over 10 years of experience in
          Business Analysis, ERP Systems, Application Support, and Frontend
          Development.
        </p>
      </div>

      <div className="cards">

        <div className="card">
          <FaUserTie className="icon"/>
          <h3>Business Analysis</h3>
          <p>
            Requirement Gathering, Process Analysis, ERP Implementation,
            Stakeholder Communication and Documentation.
          </p>
        </div>

        <div className="card">
          <FaLaptopCode className="icon"/>
          <h3>Frontend Development</h3>
          <p>
            Angular, React, TypeScript, HTML, CSS and REST APIs.
          </p>
        </div>

        <div className="card">
          <FaHeadset className="icon"/>
          <h3>Application Support</h3>
          <p>
            Jira, Production Support, Incident Management,
            Root Cause Analysis and SQL Troubleshooting.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;