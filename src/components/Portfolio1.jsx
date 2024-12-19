import React, { useRef, useEffect } from "react";
import { Projects } from "../untils/SkillsFunction";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio1() {
  const portfolioRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const portfolio = portfolioRef.current;

    // GSAP MatchMedia for responsive animations
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Small screens
        isSmall: "(max-width: 640px)",
        // Medium and larger screens
        isNotSmall: "(min-width: 641px)",
      },
      (context) => {
        const { isSmall } = context.conditions;

        gsap.to(portfolio, {
          x: () =>
            isSmall
              ? -(portfolio.scrollWidth - (container.offsetWidth - 40)) // Offset for small screens
              : -(portfolio.scrollWidth - (container.offsetWidth - 300)), // Offset for medium and larger screens
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${portfolio.scrollWidth - container.offsetWidth}`, // Match the actual scrollable distance
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    );

    return () => {
      // Cleanup GSAP instances and media queries
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-zinc-700 min-h-screen flex flex-col items-center pt-32 overflow-hidden"
    >
      {/* Title */}
      <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Portfolio
      </h2>

      {/* Cards Container */}
      <div
        ref={portfolioRef}
        className="flex space-x-24 w-full max-w-screen-2xl px-12"
      >
        {Projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-52 sm:w-64 md:w-72 lg:w-80 p-4 bg-zinc-500 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 mb-4">
              <img
                className="w-full h-full object-contain rounded-lg border-2 border-gray-300"
                src={`/portfolio/${project.imgSrc}`}
                alt={project.name}
              />
            </div>
            <p className="text-white text-lg md:text-xl font-bold">
              {project.name}
            </p>
            <p className="text-teal-400 text-sm md:text-base">{project.tech}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
