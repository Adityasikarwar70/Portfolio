import React from "react";
import "./first.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import resume from "../../images/Resume.pdf"


const First = () => {
  const comp = useRef(null)

  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{ 
      const t1 =  gsap.timeline()

      t1
      .from(["#image","#btn"],{
        // opacity:0,
        scale:1.1,
        y:"+=30",
        // stagger:0.3,
      })
      
      .from(["#text","#text2"],{
        opacity:0,
        y:"+=30",
        // stagger:0.3,
        
      })
      .from(["#social","#txtexperence"],{
        opacity:0,
        x:"+=30",
        // stagger:0.3,
      })
     
      


    },comp)
    return ()=> ctx.revert()
  },[])
  
  

  return (
    < >
    <div  ref={comp}>
      <div id="First" className="container">
        <div
         
          className="about" id="about"
        >
          <img src={require("../../images/hi.png")} alt="" />
          <p>My Name is Aditya And I am Full Stack Designer</p>
        </div>

        <div
         
          className="text" id="text"
        >
          <h1>Webdesigner</h1>
        </div>
        <div
         
          className="text2"
          id="text2"
        >
          <h1>&UX/UI designer </h1>
        </div>
        <div
         
          className="image"
          id="image"
        >
          <img src={require("../../images/Aditya.webp")} alt="" />
        </div>

        <div 
          className="btn" id="btn"
        >
          
          <a href={resume} download="AdityaResume">
            <button type="button" className="btn1">
              <img src={require("../../images/download.png")} alt="" />
              Download CV
            </button>
          </a>

          <button type="button" className="btn2">
            Skills / Projects
          </button>
        </div>
      </div>

      <div
        className="txtexperence"
        id="txtexperence"
      >
        <h1>With 2+ year Experience</h1>
      </div>

      <div
        className="social"
        id="social"
      >
        <a href="https://www.linkedin.com/in/adityasikarwar1/">
          <img
            className="socialimg" id="socialimg"
            src={require("../../images/linkedin.png")}
            alt=""
          />
        </a>

        <a href="https://github.com/Adityasikarwar70">
          <img
            className="socialimg" id="socialimg"
            src={require("../../images/github.png")}
            alt=""
          />
        </a>

        <a href="https://www.instagram.com/aadityeahh/">
          <img
            className="socialimg" id="socialimg"
            src={require("../../images/insta.png")}
            alt=""
          />
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox">
          <img 
            className="socialimg" id="socialimg"
            src={require("../../images/mail.png")}
            alt=""
          />
        </a>
      </div>
      </div>
    </>
  );
};

export default First;
