import "./Skills.css";

const skills = [
  "Business Analysis",
  "Angular",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "ASP.NET",
  "C#",
  "SQL Server",
  "MySQL",
  "Azure",
  "Jira",
  "Git",
  "ERP",
  "Incident Management",
  "Root Cause Analysis"
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Technical Skills</h2>

      <div className="skillGrid">
        {skills.map((skill) => (
          <div className="skillCard" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;