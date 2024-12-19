import React, { useRef, useEffect } from 'react';
import { Skills } from '../untils/SkillsFunction';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
  const skillRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const skill = skillRef.current;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isSmall: "(max-width: 640px)",
        isNotSmall: "(min-width: 641px)",
      },
      (context) => {
        const { isSmall } = context.conditions;

        gsap.to(skill, {
          x: () =>
            isSmall
              ? -(skill.scrollWidth - (container.offsetWidth - 40))
              : -(skill.scrollWidth - (container.offsetWidth - 300)),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${skill.scrollWidth - container.offsetWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-zinc-700 min-h-screen flex flex-col items-center pt-32 overflow-hidden"
    >
      <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Skills
      </h2>
      <div
        ref={skillRef}
        className="flex space-x-24 w-full max-w-screen-2xl px-12"
      >
        {Skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-52 sm:w-64 md:w-72 lg:w-80 p-4 bg-zinc-500 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 mb-4">
              <img
                src={`/portfolio/${skill.imgSrc}`} 
                alt={skill.name}
                className="w-full h-full object-contain rounded-lg border-2 border-gray-300"
              />
            </div>
            <p className="text-white text-lg md:text-xl font-bold">{skill.name}</p>
            <p className="text-teal-400 text-sm md:text-base">{skill.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
