/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import FAQSection from "@/components/sections/FAQs";
import FeaturedProjectSection from "@/components/sections/FeaturedProject";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/GetInTouch";
import Hero from "@/components/sections/Hero";
import Improvement from "@/components/sections/About";
import ServicesSection from "@/components/sections/Service";
import StatsSection from "@/components/sections/Stats";
import TestimonialSection from "@/components/sections/Testimonial";
import { Carousel } from "@/components/ui/Carousel";
import { Navbar } from "@/components/ui/NavbarHeader";
import { CONTACTS, FAQ, FEATURED, IMAGES, NAV_LINKS, SERVICES, STATS, TESTIMONIALS, } from "@/utils/dataMockUp";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [headerPart, setheaderPart] = useState(true);
  const HeaderRef = useRef<HTMLDivElement | null>(null);
  console.log(headerPart)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setheaderPart(entry.isIntersecting),
      { threshold: 0 }
    );

    if (HeaderRef.current) {
      observer.observe(HeaderRef.current);
    }

    return () => {
      if (HeaderRef.current) {
        observer.unobserve(HeaderRef.current);
      }
    };
  }, []);

  return (
    <div className="m-0 p-0 bg-white">
      <Navbar isHeader={!headerPart} links={NAV_LINKS} />
      <div ref={HeaderRef}>
        <Hero />
      </div>
      <Improvement />
      <Carousel images={IMAGES} />
      <StatsSection stats={STATS} />
      <ServicesSection {...SERVICES} />
      <FeaturedProjectSection {...FEATURED} />
      <TestimonialSection {...TESTIMONIALS} />
      <FAQSection {...FAQ} />
      <ContactSection {...CONTACTS} />
      <Footer />
    </div>
  );
}
