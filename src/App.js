import "./App.css";
import "./locomotive-scroll.css";
import React from "react";
import First from "./items/first/First";
import Nav from "./items/first/Nav";
import Second from "./items/second/Second";
import Third1 from "./items/third/Third1";
import Contact from "./items/contact/Contact";

function App() {
  setInterval(()=>{
    document.title ="Portfolio - CV"
  
  },2000);
  setInterval(()=>{
    document.title ="Portfolio"
  
  },1500);
  
  return (
    <>
      <Nav  />                 {/*nav bar*/}       
      <First />               {/* body..................................... */}
      <Second />               {/* body..................................... */}
      <Third1 />                 {/* body..................................... */} 
     <Contact />

      
    </>
  );
}

export default App;
