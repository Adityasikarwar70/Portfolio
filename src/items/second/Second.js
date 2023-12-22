import React from "react";
import "./Second.css";
import {motion} from 'framer-motion';
import{fadeIn} from '../../varients' 


function Second() {

      
              



  return (
    <>
      <section id="Second"  className="second ">
        <h1 className="text1">
          MY <span>PORTFOLIO</span>
        </h1>
        <div className="main">
          <motion.div
           variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
          className="img-section">
            <p>
              <img src={require("../../images/boy.png")} alt="" />
              Hey there! I am Aditya Sikarwar
            </p>

            <img src={require("../../images/bittu.JPG")} alt="" />
          </motion.div>
          <motion.div
           variants={fadeIn("left",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
          className="abut-section">
            <motion.div
            //  variants={fadeIn("up",0.3)}
            //  initial="hidden"
            //  whileInView={"show"}
            //  viewport={{once: false, amount:0.7}}
            className="abut-top-text">
              <h1>Aditya Sikarwar</h1>
              <p>Computer Science Engineer</p>
            </motion.div>
            <div className="abut-img">
              <img src={require("../../images/about-ss.png")} alt="" />
            </div>
            <motion.div 
            //  variants={fadeIn("down",0.3)}
            //  initial="hidden"
            //  whileInView={"show"}
            //  viewport={{once: false, amount:0.7}}
            className="abut-botton-text">
              <h1>
                <img src={require("../../images/email.png")} alt="" />
                bs151439@gmail.com
              </h1>
              <h1>
                <img src={require("../../images/phone.png")} alt="" />
                (+91) 7049364736
              </h1>
            </motion.div>
          </motion.div>
        </div>

        <hr/>

        <div id="Skills" className="main-skills">

            
            <motion.div className="skills">
            {/* <h1><img src={require("../../images/lightining.png")} alt="" />My Skills</h1> */}
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/html.png")} alt="" />
                <h1>HTML</h1></div>
                <p>3+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/css.png")} alt="" />
                <h1>CSS</h1></div>
                <p>3+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/js.png")} alt="" />
                <h1>JavaScript</h1></div>
                <p>3+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/c.png")} alt="" />
                <h1>C</h1></div>
                <p>2+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/cpp.png")} alt="" />
                <h1>C++</h1></div>
                <p>2+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/java.png")} alt="" />
                <h1>Java</h1></div>
                <p>2+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/python.png")} alt="" />
                <h1>Python</h1></div>
                <p>1+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/bootstrap.png")} alt="" />
                <h1>BootStrap</h1></div>
                <p>1+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/tailwind.png")} alt="" />
                <h1>Tailwind CSS</h1></div>
                <p>1+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="lang"><div className="lang-type"><img src={require("../../images/react.png")} alt="" />
                <h1>React</h1></div>
                <p>1+ Year</p></motion.div>
            </motion.div>



            <div className="other-skills">
                <motion.div
        //          variants={fadeIn("left",0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="skills-other"><div className="skills-type"><img src={require("../../images/photoshop.png")} alt="" />
                <h1>Photoshop</h1></div>
                <p>5+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="skills-other"><div className="skills-type"><img src={require("../../images/premiere-pro.png")} alt="" />
                <h1>Premiere Pro</h1></div>
                <p>5+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("left",0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="skills-other"><div className="skills-type"><img src={require("../../images/illustrator.png")} alt="" />
                <h1>illustrator</h1></div>
                <p>5+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="skills-other"><div className="skills-type"><img src={require("../../images/canva.png")} alt="" />
                <h1>Canva</h1></div>
                <p>4+ Year</p></motion.div>
                <motion.div
        //          variants={fadeIn("right",0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{once: false, amount:0.7}}
                className="skills-other"><div className="skills-type"><img src={require("../../images/figma.png")} alt="" />
                <h1>Figma</h1></div>
                <p>3+ Year</p></motion.div>
            </div>
        </div>

      </section>
    </>
  );
}

export default Second;
