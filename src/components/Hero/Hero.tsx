import "./Hero.css";
import profile from "../../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import { FaCircle } from "react-icons/fa";


function Hero(){

return(

<section id="home" className="hero">

<div className="left">

{/* <p className="welcome">

Hello, I'm

</p> */}
<div className="availability">
  <FaCircle className="status" />
  <span>Available for Opportunities</span>
</div>

<h1>Sumra Ahmed</h1>

<div className="designation">
  <TypeAnimation
    sequence={[
      "Business Analyst",
      2000,
      "Application Support Engineer",
      2000,
      "Angular Developer",
      2000,
      "ERP Support Specialist",
      2000,
      "Frontend Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
{/* <h1>

Sumra Ahmed

</h1> */}

{/* <h2>

Business Analyst

<br/>

Application Support Engineer

<br/>

Angular Developer

</h2> */}

<p>

Passionate Software Engineer with over 10 years of experience delivering enterprise applications, ERP systems, production support, and business solutions.

</p>

<div className="buttons">
<button>
<a
  href={`${import.meta.env.BASE_URL}Resume.pdf`}
  download
>
  Download CV
</a>





</button>



<a href="#contact">

<button className="outline">

Contact Me

</button>

</a>

</div>

</div>

<div className="right">

 <img src={profile} alt="Sumra Ahmed" />

</div>

</section>

)

}

export default Hero;