import Image from "next/image";
import Link from "next/link";
import $ from 'jquery';
import Container from "@/components/UI/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect } from 'react';
export default function AboutMe({
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
    
    <section className="about-section" id="about" >
    <SectionHeading
        name="About me"
    />
    <div className="section about-me-section"> 
        <Container>
            <div className="grid lg:grid-cols-2 items-center gap-[5px] lg:gap-[110px]">
                <div className="about-me-text">
                    <p className="description text-anim">
                        Hello! I’m Amardeep Singh. Web designer from India, Chandigarh,
                        Punjab. I have rich experience in web site design and
                        building, lso I am good at wordpress. I love to talk with you
                        about our unique.
                    </p>
                    <ul>
                        <li className="fade_right">
                            <h2><span className="counter">15</span>+</h2>
                            <p>Years of experience</p>
                        </li>
                        <li className="fade_right">
                            <h2><span className="counter">1</span>K+</h2>
                            <p>Successful Projects</p>
                        </li>
                    </ul>
                    <Link className="btn" href="#"
                        >Contact me</Link>
                </div>
                <div className="about-me-image">
                    <Image src="/images/about-amardeep-singh-chahal-website-designer-in-india.webp" alt="about" width={900} height={1200} className="img-fluid"/>
                </div>
            </div>
        </Container>
    </div>
</section>
  );
}
