import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const aboutRef = useRef(null); // Ref for the entire section
  const headingRef = useRef(null); // Ref for the heading
  const textRef = useRef(null); // Ref for the paragraph

  useEffect(() => {
    // Animation for the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animation for the paragraph
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col items-center justify-center text-white min-h-screen bg-zinc-700 p-6"
    >
      <div className="max-w-3xl text-center">
        <h1
          ref={headingRef}
          className="text-4xl font-bold md:text-5xl mb-4"
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
