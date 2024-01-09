import React,{useRef, useLayoutEffect} from "react";
import "./Second.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function Second() {
               
  const comp = useRef(null)
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{ 
      const t1 =  gsap.timeline()
   
t1.fromTo(".second",
{
    backgroundColor:"#fff"
},
{
  backgroundColor:"#0E161F",
  // opacity:0,
  // y:"40%",
  // duration:2,
  scrollTrigger:{
    trigger:".second",
    start:"top 70%",
    
    end:"bottom 150%",
    // markers:true,
    scrub:1,
  }
}
)

t1.from([".img-section"],{
  color:"#black",
  opacity:0,
  // duration:1,
  y:"30%",
  scrollTrigger:{
    trigger:".img-section",
    start:"top 75%",
    end:"bottom bottom",
    scrub:1,
    // markers:true,
  }
})
t1.from([".abut-section"],{
  color:"#black",
  opacity:0,
  // duration:1,
  y:"30%",
  scrollTrigger:{
    trigger:".abut-section",
    start:"top 75%",
    end:"bottom bottom",
    scrub:1,
    // markers:true,
  }
})
t1.from([".lang",".skills-other"],{
  color:"#black",
  opacity:0,
  duration:3,
  y:"30%",
  scrollTrigger:{
    trigger:".lang",
    start:"top 75%",
    end:"bottom 70%",
    scrub:true,
    // markers:true,
  }
})




},comp)
return ()=> ctx.revert()
},[])

  return (
    <>
    <div ref={comp}>
      <section id="Second"   className="second ">
        <div className="second3">
        <h1 className="text1">
          MY <span>PORTFOLIO</span>
        </h1>
        <div className="main">
          <div
           
          className="img-section">
            <p>
              <img src={require("../../images/boy.png")} alt="" />
              Hey there! I am Aditya Sikarwar
            </p>

            <img  src={require("../../images/aditya2.jpeg")} alt="" />
          </div>
          <div
       
          className="abut-section">
            <div
            
            className="abut-top-text">
              <h1>Aditya Sikarwar</h1>
              <p>Computer Science Engineer</p>
            </div>
            <div className="abut-img">
              <img src={require("../../images/about-ss.png")} alt="" /> 
            </div>
            <div 
           
            className="abut-botton-text">
              <h1>
                <img src={require("../../images/email.png")} alt="" />
                bs151439@gmail.com
              </h1>
              <h1>
                <img src={require("../../images/phone.png")} alt="" /> 
                (+91) 7049364736
              </h1>
            </div>
          </div>
        </div>
        </div>
        <hr/>

        <div id="Skills" className="main-skills">

            
            <div className="skills">
            {/* <h1><img src={require("../../images/lightining.png")} alt="" />My Skills</h1> */}
                <div
    
                className="lang"><div className="lang-type"><img src={require("../../images/html.png")} alt="" />
                <h1>HTML</h1></div>
                <p>3+ Year</p></div>
                <div
     
                className="lang"><div className="lang-type"><img src={require("../../images/css.png")} alt="" />
                <h1>CSS</h1></div>
                <p>3+ Year</p></div>
                <div
      
                className="lang"><div className="lang-type"><img src={require("../../images/js.png")} alt="" />
                <h1>JavaScript</h1></div>
                <p>3+ Year</p></div>
                <div
     
                className="lang"><div className="lang-type"><img src={require("../../images/c.png")} alt="" />
                <h1>C</h1></div>
                <p>2+ Year</p></div>
                <div
        
                className="lang"><div className="lang-type"><img src={require("../../images/cpp.png")} alt="" />
                <h1>C++</h1></div>
                <p>2+ Year</p></div>
                <div
        
                className="lang"><div className="lang-type"><img src={require("../../images/java.png")} alt="" />
                <h1>Java</h1></div>
                <p>2+ Year</p></div>
                <div
       
                className="lang"><div className="lang-type"><img src={require("../../images/python.png")} alt="" />
                <h1>Python</h1></div>
                <p>1+ Year</p></div>
                <div
      
                className="lang"><div className="lang-type"><img src={require("../../images/bootstrap.png")} alt="" />
                <h1>BootStrap</h1></div>
                <p>1+ Year</p></div>
                <div
        
                className="lang"><div className="lang-type"><img src={require("../../images/tailwind.png")} alt="" />
                <h1>Tailwind CSS</h1></div>
                <p>1+ Year</p></div>
                <div
        
                className="lang"><div className="lang-type"><img src={require("../../images/react.png")} alt="" />
                <h1>React</h1></div>
                <p>1+ Year</p></div>
            </div>



            <div className="other-skills">
                <div
         
                className="skills-other"><div className="skills-type"><img src={require("../../images/photoshop.png")} alt="" />
                <h1>Photoshop</h1></div>
                <p>5+ Year</p></div>
                <div
       
                className="skills-other"><div className="skills-type"><img src={require("../../images/premiere-pro.png")} alt="" />
                <h1>Premiere Pro</h1></div>
                <p>5+ Year</p></div>
                <div
        
                className="skills-other"><div className="skills-type"><img src={require("../../images/illustrator.png")} alt="" />
                <h1>illustrator</h1></div>
                <p>5+ Year</p></div>
                <div
       
                className="skills-other"><div className="skills-type"><img src={require("../../images/canva.png")} alt="" />
                <h1>Canva</h1></div>
                <p>4+ Year</p></div>
                <div
       
                className="skills-other"><div className="skills-type"><img src={require("../../images/figma.png")} alt="" />
                <h1>Figma</h1></div>
                <p>3+ Year</p></div>
            </div>
        </div>

      </section>
      </div>
    </>
  );
}

export default Second;
