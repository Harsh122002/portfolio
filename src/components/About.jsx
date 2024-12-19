import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null); // Ref for the entire section
  const headingRef = useRef(null); // Ref for the heading
  const textRef = useRef(null); // Ref for the paragraph

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the entire section
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%", // Animation starts when top of section reaches 80% of viewport height
            end: "top 30%",  // Animation ends when top reaches 30% of viewport
            toggleActions: "play none none reverse", // Animates on scroll up and down
          },
        }
      );

      // Animation for the heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Animation for the paragraph
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col items-center justify-center text-white min-h-screen bg-zinc-700 p-6"
    >
      <div className="max-w-3xl text-center">
        <h1
          ref={headingRef}
          className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-bold md:text-5xl mb-10"
        >
          About Us
        </h1>
        <p
          ref={textRef}
          className="text-lg text-white leading-relaxed md:text-xl"
        >
          Welcome to our website! We are dedicated to providing you with the
          best experience and value. Our team works tirelessly to deliver
          exceptional products and services tailored to meet your needs. We
          believe in innovation, integrity, and commitment to quality,
          ensuring that you always receive top-notch service. Thank you for
          being a part of our journey.
        </p>
      </div>
    </div>
  );
}
