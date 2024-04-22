import { gsap } from "gsap/dist/gsap";
import React, { useEffect } from 'react';
import $ from 'jquery';
export default function Header() {
    useEffect(() => {   
            const svg = document.getElementById("svg");
            const tl = gsap.timeline();
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
      
            tl.to(".preloader", {
              y: -1500,
            });
            tl.to(".preloader", {
              zIndex: -1,
              display: "none",
            });

      }, []);
  return (
  <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <h5 className="preloader-text">Loading</h5>
    </div>
    );
}