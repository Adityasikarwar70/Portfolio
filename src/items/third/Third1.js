import React, { useEffect } from "react";
import "./Third1.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tufgaming from "../../images/tufgaming.MP4";
import resume from "../../images/resume.MP4";
import summerizer from "../../images/summerizer.MP4";
import textbox from "../../images/texteditor.MP4";
import redstore from "../../images/redstore.MP4";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import Python from "../../images/python.png";
import java from "../../images/java.png";
import flask from "../../images/flask.png";
import bootstrap from "../../images/bootstrap.png";
import photoshop from "../../images/photoshop.png";
import illustrator from "../../images/illustrator.png";
import sql from "../../images/sql.png";

gsap.registerPlugin(ScrollTrigger);
const Third1 = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".video-container:not(:first-child)", {
        opacity: 0,
        scale: 0.5,
      });

      const animation = gsap.to(".video-container:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".container0",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: 3,
        // markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="third1">
      <div className="left">
        <div className="container0">
          <div className="main-container">
            <div className="content">
              <h4>01</h4>
              <h1>Tuf </h1>
              <h1>Gaming </h1>
              <div className="left-images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <p>A Gaming Website for purchase games.</p>
              <div className="button-container">
                <a href="https://github.com/Adityasikarwar70/TUF-GAMING">
                  <button class="button">View Code</button>
                </a>
                <a href="https://adityasikarwar70.github.io/TUF-GAMING/">
                  <button class="button">Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="content">
              <h4>02</h4>
              <h1>Text </h1>
              <h1>Summerizer </h1>
              <div className="left-images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
                <img src={Python} alt="" />
                <img src={flask} alt="" />
                <img src={photoshop} alt="" />
                <img src={illustrator} alt="" />
              </div>
              <p>
                implemented advanced text summarization using SpaCy in Python,
                enhancing the website’s ability to generate concise summaries
                from extensive text through NLP techniques.
              </p>
              <div className="button-container">
                <a href="https://github.com/Adityasikarwar70/Text-Summarizer">
                  <button class="button">View Code</button>
                </a>
                <a href="https://github.com/Adityasikarwar70/Text-Summarizer">
                  <button class="button">Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="content">
              <h4>03</h4>
              <h1>Resume </h1>
              <h1>Builder</h1>
              <div className="left-images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <p>
                It is a resume builder website is an online platform designed to
                assist individuals in creating professional and effective
                resumes for job applications.
              </p>
              <div className="button-container">
                <a href="https://github.com/Adityasikarwar70/Resume-Builder">
                  <button class="button">View Code</button>
                </a>
                <a href="https://adityasikarwar70.github.io/Resume-Builder/">
                  <button class="button">Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="content">
              <h4>04</h4>
              <h1>Text </h1>
              <h1>Editor </h1>
              <div className="left-images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <p>
                Used to create your Notes, search through notes to find your
                important notes <br />
                Recognized by faculty audience in “top 5” out of 50 teams
              </p>
              <div className="button-container">
                <a href="https://github.com/Adityasikarwar70/Text-Editor">
                  <button class="button">View Code</button>
                </a>
                <a href="https://devsnest-note-taking-app.vercel.app/">
                  <button class="button">Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="main-container">
            <div className="content">
              <h4>05</h4>
              <h1>Red </h1>
              <h1>Store </h1>
              <div className="left-images">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={java} alt="" />
                <img src={sql} alt="" />
              </div>
              <p>
                Designed and implemented a dynamic and responsive online
                clothing store using HTML, CSS, and JavaScript, providing an
                engaging user experience for customers.
              </p>
              <div className="button-container">
                <a href="https://github.com/Adityasikarwar70/RedStore">
                  <button class="button">View Code</button>
                </a>
                <a href="https://adityasikarwar70.github.io/RedStore/">
                  <button class="button">Website</button>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="main-container">
            <div className="content">
              <h4>06</h4>
              <h1>Project </h1>
              <h1>Name </h1>
              <div>skills</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quae, illum perferendis
              </p>
              <button class="button">View Code</button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="right">
        <div className="main-container1">
          <div className="container2">
            <div className="video-container">
              <video src={tufgaming} autoPlay loop muted></video>
            </div>

            <div className="video-container">
              <video src={summerizer} autoPlay loop muted></video>
            </div>

            <div className="video-container">
              <video src={resume} autoPlay loop muted></video>
            </div>

            <div className="video-container">
              <video src={textbox} autoPlay loop muted></video>
            </div>

            <div className="video-container">
              <video src={redstore} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third1;