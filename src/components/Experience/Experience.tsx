import "./Experience.css";

const experience = [

{
    company:"Army Public Schools & Colleges",
    designation:"Software DBA Administrator / Developer",
    duration:"Aug 2025 - Present",
    description:[
        "Collaborated with software teams to maintain and optimize HR Software.",
        "Managed production incidents and support tickets using Jira.",
        "Worked with Development, Infrastructure and QA teams.",
        "Performed production support and bug tracking."
    ],
    technologies:["Jira","SQL","HRMS","ERP","Azure"]
},

{
    company:"Silver Oaks Schools & Colleges",
    designation:"Software Manager / ERP Support Lead",
    duration:"Nov 2023 - Aug 2025",
    description:[
        "Gathered business requirements and converted them into technical specifications.",
        "Provided ERP support for Finance, HR, Supply Chain and Student Management.",
        "Performed Root Cause Analysis for production issues.",
        "Managed releases and deployments."
    ],
    technologies:["Angular","ERP","Azure","Jira","SQL"]
},

{
    company:"SoftoSol Pvt Ltd",
    designation:"Frontend Developer (Angular)",
    duration:"Oct 2022 - Apr 2023",
    description:[
        "Developed enterprise web applications using Angular.",
        "Integrated REST APIs.",
        "Developed responsive user interfaces.",
        "Managed source code using Git."
    ],
    technologies:["Angular","TypeScript","Git","REST API"]
},

{
    company:"EMQ Technologies",
    designation:"Software Engineer / POS Frontend Developer",
    duration:"Nov 2020 - Nov 2021",
    description:[
        "Developed POS frontend.",
        "Optimized application performance.",
        "Integrated with PHP backend."
    ],
    technologies:["Angular","PHP","MySQL"]
},

{
    company:"Hesox Digital",
    designation:"Support Engineer",
    duration:"Apr 2018 - Jul 2020",
    description:[
        "Delivered L1/L2 Support.",
        "Worked with SQL queries.",
        "Reduced ticket backlog.",
        "Maintained SLA compliance."
    ],
    technologies:["SQL","Support","Jira"]
},

{
    company:"NETSOL Technologies",
    designation:"Software Engineer",
    duration:"May 2016 - Jan 2017",
    description:[
        "Enhanced Wholesale Finance System.",
        "Worked with QA teams.",
        "Managed SVN repositories."
    ],
    technologies:["SVN","Finance","SQL"]
},

{
    company:"Econceptions",
    designation:"Software Engineer",
    duration:"Nov 2014 - Apr 2016",
    description:[
        "Worked on Linux.",
        "Optimized SQL Queries.",
        "Frontend Development.",
        "Client Technical Support."
    ],
    technologies:["Linux","HTML","CSS","SQL"]
},

{
    company:"Switch Solutions",
    designation:"Support Engineer",
    duration:"May 2014 - Nov 2014",
    description:[
        "Linux server troubleshooting.",
        "MySQL query optimization.",
        "Remote technical support."
    ],
    technologies:["Linux","MySQL"]
}

];

function Experience(){

return(

<section className="experience" id="experience">

<h2>Professional Experience</h2>

<div className="timeline">

{

experience.map((job,index)=>(

<div className="container" key={index}>

<div className="content">

<h3>{job.designation}</h3>

<h4>{job.company}</h4>

<span>{job.duration}</span>

<ul>

{
job.description.map((point,i)=>(
<li key={i}>{point}</li>
))
}

</ul>

<div className="tech">

{
job.technologies.map((item,i)=>(
<span key={i}>{item}</span>
))
}

</div>

</div>

</div>

))

}

</div>

</section>

)

}

export default Experience;