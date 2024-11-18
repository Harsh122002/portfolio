import React, { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"; // Install react-icons if not already: npm install react-icons
import { gsap } from "gsap";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skill from "./Skills";

export default function Home() {
  const nameRef = useRef(null); // Ref for name and subtitle
  const socialLinksRef = useRef(null); // Ref for social links
  const imageRef = useRef(null); // Ref for the image

  useEffect(() => {
    // Animation for the name and subtitle
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animation for the social links
    gsap.fromTo(
      socialLinksRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-white pt-20 pl-8 pr-8 lg:pl-12">
        {/* Left Side: Name, Subtitle, and Social Links */}
        <div
          className="flex flex-col items-start md:w-1/2 text-center md:text-left"
          ref={nameRef}
        >
          <h1 className="text-4xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-4">
            Harsh Chavada
          </h1>
          <p className="text-lg text-gray-600 md:text-xl mb-6">
            A passionate Full Stack Developer with expertise in modern web
            technologies.
          </p>
          <div
            className="text-center sm:ml-20 ml-4"
            ref={socialLinksRef}
          >
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          className="mt-6 mb-6 md:mt-0 md:w-[40] flex justify-center lg:mr-16"
          ref={imageRef}
        >
          <img
            src="../myphoto.jpg"
            alt="Harsh Chavada"
            className="rounded-lg max-w-full h-96"
          />
        </div>
      </div>
      {/* Other Components */}
      <About />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}
