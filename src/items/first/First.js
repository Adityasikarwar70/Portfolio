import React from "react";
import "./first.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";
import resume from "../../images/Resume.pdf"
// import  LocomotiveScroll  from "locomotive-scroll";

const First = () => {

  
  

  return (
    <>
      <div id="First" className="container">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="about"
        >
          <img src={require("../../images/hi.png")} alt="" />
          <p>My Name is Aditya And I am Full Stack Designer</p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h1>Webdesigner</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text2"
        >
          <h1>&UX/UI designer </h1>
        </motion.div>
        <motion.div
          //  variants={fadeIn("down",0.3)}
          //  initial="hidden"
          //  whileInView={"show"}
          //  viewport={{once: false, amount:0.7}}
          className="image"
        >
          <img src={require("../../images/Aditya.PNG")} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="btn"
        >
          
          <a href={resume} download="Resume">
            <button type="button" className="btn1">
          {/* <a href="https://drive.google.com/file/d/1OGtuhJ1ZnQooSnD_mlklDG-donLT_40O/view?usp=sharing">
            <button type="button" className="btn1"> */}
              <img src={require("../../images/download.png")} alt="" />
              Download CV
            </button>
          </a>

          <button type="button" className="btn2">
            Skills / Projects
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="txtexperence"
      >
        <h1>With 2+ year Experience</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="social"
      >
        <a href="https://www.linkedin.com/in/adityasikarwar1/">
          <img
            className="socialimg"
            src={require("../../images/linkedin.png")}
            alt=""
          />
        </a>

        <a href="https://github.com/Adityasikarwar70">
          <img
            className="socialimg"
            src={require("../../images/github.png")}
            alt=""
          />
        </a>

        <a href="https://www.instagram.com/aadityeahh/">
          <img
            className="socialimg"
            src={require("../../images/insta.png")}
            alt=""
          />
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox">
          <img
            className="socialimg"
            src={require("../../images/mail.png")}
            alt=""
          />
        </a>
      </motion.div>
    </>
  );
};

export default First;
