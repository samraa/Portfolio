import "./Hero.css";

function Hero(){

return(

<section id="home" className="hero">

<div className="left">

<p className="welcome">

Hello, I'm

</p>

<h1>

Sumra Ahmed

</h1>

<h2>

Business Analyst

<br/>

Application Support Engineer

<br/>

Angular Developer

</h2>

<p>

Passionate Software Engineer with over 10 years of experience delivering enterprise applications, ERP systems, production support, and business solutions.

</p>

<div className="buttons">

<a
  href={`${import.meta.env.BASE_URL}Resume.pdf`}
  download
>
  Download CV
</a>

<button>

Download CV

</button>



<a href="#contact">

<button className="outline">

Contact Me

</button>

</a>

</div>

</div>

<div className="right">

<img src="/profile.png"/>

</div>

</section>

)

}

export default Hero;