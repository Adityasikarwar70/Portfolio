import React from 'react'
import './Contact.css'
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin2.png"
import github from "../../images/github2.png"

const Contact = () => {


  return (
   <>

<footer>

<div id='Contact' className="footer">
<div className="row1">
<a href="https://www.instagram.com/aadityeahh/"><img src={instagram} alt="" /></a>
<a href="https://www.linkedin.com/in/adityasikarwar1/"><img src={linkedin} alt="" /></a>
<a href="https://github.com/Adityasikarwar70"><img src={github} alt="" /></a>
</div>

<div className="row">
<ul>
<li><a className="nav-link active" href="#First">Home</a></li>
<li><a className="nav-link active" href="#Second">About us</a></li>
<li><a className="nav-link active" href="#Skills">Skills </a></li>
<li><a className="nav-link active" href="#projects">Projects us</a></li>

</ul>
</div>

<div className="row2">
All rights reserved || Designed By: <span>Aditya Sikarwar</span> 
</div>
</div>
</footer>
   </>
  )
}

export default Contact