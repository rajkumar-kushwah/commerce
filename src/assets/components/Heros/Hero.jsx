import React from "react";
import Hand from "../images/hand.png";
import "./hero.css";
import Heros from "../images/Heros.jpg";
import rightarrow from "../images/right-arrow.png";
function Hero() {
  return (
    <div className="hero ">
      <div className="hero-header flex w-full  justify-between items-center px-10  ">
      <div className="hero-left ">
        <h2 className="text-ms ">NEEW ARRIVALS ONLY</h2>

        <div className="hand-hand-icon  flex items-center gap-8">
          <p className="text-4xl">NEW</p>
          <img className="w-[100px]" src={Hand} alt="" />
        </div>
        <p>Collections</p>
        <p>for Avryone</p>
      
      <div className="right-arrow-btn cursor-pointer p-2 transition-transform duration-300  transform hover:translate-x-5 ">
        <div>Latest collection</div>
        <img className="w-8 transition-transform duration-300  transform hover:translate-x-5 " src={rightarrow} alt="" />
      </div>
     
      </div>
      
         <div className="">
      <img className="w-100 rounded-4xl" src={Heros} alt="" />
      </div>
      
      </div>
    </div>
  );
}

export default Hero;
