'use client'

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div ref={heroRef}>
        <HeroSection scrollTo={() => scrollToSection(featuresRef)} />
      </div>
      <div ref={featuresRef}>
        <Features scrollTo={() => scrollToSection(testimonialsRef)} />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials scrollTo={() => scrollToSection(heroRef)}/>
      </div>
    </>
  );
}
