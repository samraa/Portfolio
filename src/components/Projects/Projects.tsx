import "./Projects.css";
import {
  FaAngular,
  FaReact,
  // FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";

const projects = [
 
  {
    title: "Learning Management System (LMS)",
    description:
      "Designed and developed an LMS for schools with course management, assignments, attendance, grading, and student performance tracking.",
    tech: ["Angular", "TypeScript", "ASP.NET Core", "SQL"],
    icon: <FaAngular />,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio developed using React, TypeScript, Framer Motion, and EmailJS with dark theme and smooth animations.",
    tech: ["React", "TypeScript", "Vite", "EmailJS"],
    icon: <FaReact />,
  },
  {
    title: "POS Management System",
    description:
      "Developed responsive POS interfaces with inventory management, billing, and reporting features.",
    tech: ["Angular", "PHP", "MySQL"],
    icon: <FaDatabase />,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Featured Projects</h2>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;