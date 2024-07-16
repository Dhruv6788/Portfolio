import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import number1 from "/Images/number2.svg";
import mongDb from "/Images/mongoDb.svg";
import html from "/Images/html.png";
import css from "/Images/css.png";
import js from "/Images/js.png";
import Reactlogo from "/Images/react.png";
import gsaplogo from "/Images/gsap.svg";
import nodejsLogo from "/Images/nodejs.png";
import expresslogo from "/Images/express.png";
import tailwindcss from "/Images/tailwindcss.svg";
import bootstrapLogo from "/Images/bootstrap.png";
import vite from "/Images/vite.svg";
import java from "/Images/java.svg";

const Home = () => {
  const [progress, setprogress] = useState(0);
  const container = useRef(null)
  const [display, setdisplay] = useState(false);

  useGSAP(() => {
    let textAnimate = gsap.timeline();
    textAnimate.from(".word", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
    });
    textAnimate.to(".word", {
      y: -50,
      opacity: 0,
      stagger: -0.1,
    });

    textAnimate.to(".wrapper", {
      duration: 1,
      opacity: 0,
    });

    textAnimate.from(".logo", {
      y: 100,
      opacity: 0,
    });

    textAnimate.from(".links", {
      x : 400,
      opacity : 0,
      stagger : .1
    });
    textAnimate.from(".greet", {
      y : -100,
      opacity : 0,
      stagger : .1
    });
    textAnimate.from(".name", {
      y : -100,
      opacity : 0,
      stagger : .1
    });

    textAnimate.from(".fullstack", {
      y : -100,
      opacity : 0,
      stagger : .1
    });
    textAnimate.from(".developer", {
      y : 100,
      opacity : 0,
      stagger : .1
    });
    
    textAnimate.from("img", {
      y : 100,
      opacity : 0,
      stagger : .1
    });

  

    

  });

  return (
    <div className="w-screen">

      <div className="w-full absolute z-[20]  h-[100vh] flex flex-col items-center justify-center bg-black text-white wrapper">
        <h1 className="text-6xl font-[ase] flex" id="name">
          {"Portfolio".split("").map((word, index) => {
            return (
              <div
                key={index}
                className="flex word tracking-widest text-purple-200"
              >
                {word === " " ? <div>&nbsp; &nbsp;</div> : word}
              </div>
            );
          })}
        </h1>
      </div>

      <div className={`w-full h-full absolute ${display ? 'hidden' : 'block'}  leading-none`}>
        <nav className="w-full text-black flex justify-between items-center font-bold px-20 py-10">
          <h1 className="font-[HS] text-md text-purple-600 logo">
            Dhruv Joshi
          </h1>
          <div className="flex gap-16 text-purple-600 list-none font-medium text-sm">
            <li className="links">About</li>
            <li className="links">Skills</li>
            <li className="links">Contact</li>
            <li className="links">Resume</li>
          </div>
          <i className="ri-menu-3-line text-black text-sm flex lg:hidden"></i>
        </nav>

        <div className="w-full flex justify-center mt-20">
          <div className="w-[50%]">
            <div className="w-full flex items-center justify-start ml-[5vw] gap-10 greet">
              <h1
                className="text-[2vw] font-semibold text-black name"
                id="field"
              >
                Hii IM
              </h1>
              <div className="bg-purple-300 w-[65%] h-[10px]"></div>
            </div>
            <div className="w-full flex justify-center">
              <h1
                className="text-[10.3vw] tracking-widest font-bold text-black name"
                id="field"
              >
                DHRUV
              </h1>
            </div>
            <div className="w-full  text-3xl justify-center tracking-[10px] font-thin opacity-55 mt-2 h-[10vh] flex gap-12 leading-none  px-32">
              <h1 className="fullstack">Fullstack </h1>
              <h1 className="developer"> Developer</h1>
            </div>
          </div>
        </div>

        <div className="w-full" >
          <div className="w-full flex justify-start" ref={container}>
            <img src={number1} className="w-1/2" alt="" />
            <div className="w-1/2 mt-28">
              <div className="flex justify-evenly">
                <img src={html} className="w-[10%]" alt="" />
                <img src={css} className="w-[10%]" alt="" />
                <img src={js} className="w-[10%]" alt="" />
              </div>
              <div className="flex justify-evenly mt-10">
                <img src={tailwindcss} className="w-[10%]" alt="" />

                <img src={bootstrapLogo} className="w-[10%]" alt="" />
                <img src={vite} className="w-[10%]" alt="" />
              </div>
              <div className="flex justify-evenly mt-10">
                <img src={gsaplogo} className="w-[10%]" alt="" />
                <img
                  src={nodejsLogo}
                  className="w-[10%] object-contain"
                  alt=""
                />
                <img
                  src={expresslogo}
                  className="w-[10%] object-contain"
                  alt=""
                />
              </div>
              <div className="flex justify-evenly mt-10">
                <img src={Reactlogo} className="w-[10%]" alt="" />
                <img src={mongDb} className="w-[10%] object-contain" alt="" />
                <img src={java} className="w-[10%] object-contain" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
