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
export default function HeroInnerPage({
    title,
    content
}) {
  return (
    <section className="hero-banner-inner-page">
        <ContainerLG>
            <h1 className="text-[150px]">{title}</h1>
            <div className="text-[20px]">{content}</div>
        </ContainerLG>
    </section>
  );
}
