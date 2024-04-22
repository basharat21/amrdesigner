import Image from "next/image";
import Link from "next/link";
import ContainerLG from "@/components/UI/ContainerLg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect } from 'react';
export default function Hero() {
    useEffect(() => {
        let device_width = window.innerWidth;
        if (device_width > 767) {
        gsap.to(".hero-heading", {
            y: 400,
            scrollTrigger: {
            trigger: ".hero-heading",
            start: "top 250px",
            end: "bottom 150px",
            scrub: true,
            }
          });
        gsap.to("[data-speed]", {
            y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
            ease: "none",
            scrollTrigger: {
            start: "top top",
            end: "max",
            scrub: 0
            }
          });
        }
    }, []);
  return (
    <section className="hero-banner overflow-hidden">
        <ContainerLG>
            <div className="banner-img">
                <div className="banner_text">
                    <div className="banner-text-top">
                         <div className="text-[18px] font-semibold max-w-[360px]" data-speed="0.25">Hello, I’m <b className="text-[#ea552b]">Amardeep Singh Chahal</b>, <h1>Website designer and front-end developer in India. </h1></div>                         
                        <div className="hero-banner-cta cursor-effect hidden md:flex" data-speed="0.05">
                            <div className="hero-banner-cta-img">
                                <Image src="/images/svg/call.svg" alt="Call Now" width={80} height={80} />
                                <Image src="/images/svg/skype.svg" alt="Call Now" width={80} height={80} />
                                <Link href="https://wa.me/919888940088?text=Hello%20Amar%20Web%20Designer" className="w-[80px]"><Image src="/images/svg/whatsapp.svg" alt="Call Now" width={80} height={80} /></Link>
                            </div>
                            <div className="whitespace-nowrap">
                                <span className="block uppercase text-[16px]">24/7 Give a ring</span>
                                <Link href="https://wa.me/919888940088?text=Hello%20Amar%20Web%20Designer" className="block md:text-[26px] text-[20px] font-bold">+91-98889-40088</Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner-text-center">
                        <div className="hero-heading cursor-effect" data-aos="fade-up">I Love <span>Web</span>Design </div>
                    </div>
                    <div className="banner-text-bottom">
                        <div className='' data-speed="0.5">
                            <Link href="#" title='' className='alter-btn btn-animated hero-cta-btn'>
                            Explore <FontAwesomeIcon icon={faArrowTrendUp} />
                            My Services
                            <span></span>
                            </Link>
                        </div>
                        <div className="text text-right" data-speed="0.3">
                            {/* <p>Feel Free to send me a message if you have website design and development requirements.</p> */}
                            <span>Scroll Down</span>
                            <a className="scroll" href="#">
                                <FontAwesomeIcon icon={faAnglesDown} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="img ">
                    <Image src="/images/amardeep-singh-website-designer-maker-in-india.webp" alt="Amardeep Singh - Website Designer India" width={600} height={850} />
                </div>
            </div>
        </ContainerLG>
    </section>
  );
}
