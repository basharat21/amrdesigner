import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect } from 'react';
export default function SectionHeading({
  name
}) {
    useEffect(() => {              
          // gsap.to(".marque", {
          //   duration: 5,
          //   ease: "none",
          //   x: "-=1000", 
          //   repeat: -1,
          // });
          gsap.to(".marque", {
            x: -400,
            scrollTrigger: {
              trigger: ".marque",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              //markers: true,
              id: "scrub"
            }
          });
          

      }, []);
  return (
    <div className="section-heading ">
        <h2 className="marque flex">
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
        </h2>
    </div>
  );
}
