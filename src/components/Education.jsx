import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  const educationRefs = useRef([]);

  useEffect(() => {
    // Define the animation
    const animation = gsap.fromTo(
      educationRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3, // Stagger animation for each element
        ease: 'power3.out',
        paused: true, // Start in a paused state
      }
    );

    if (inView) {
      animation.play(); // Play animation on enter
    } else {
      animation.reverse(); // Reverse animation on exit
    }
  }, [inView]);

  const educationList = [
    {
      title: "Gujarat Secondary Education Board",
      details: "Passed out in 2017 (Grade: A2)",
    },
    {
      title: "Gujarat Higher Secondary Education Board",
      details: "Passed out in 2019 (Science) (Grade: B1)",
    },
    {
      title: "Bachelor of Science in Mathematics",
      details:
        "Graduated in 2023 from Bhatak Kavi Narashi Mehta University (Grade: Distinction A)",
    },
    {
      title: "Master of Computer Applications (MCA)",
      details:
        "Currently pursuing at Dr. Subhash University (Result: 9.71 CGPA, sem:1) (sem:2 9.2 CGPA)",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center bg-gray-100 p-6 lg:pt-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Education
      </h2>
      <div className="space-y-8 w-full max-w-md md:max-w-2xl">
        {educationList.map((education, index) => (
          <div
            ref={(el) => (educationRefs.current[index] = el)}
            key={index}
            className="p-4 sm:p-6 bg-zinc-700 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-400">
              {education.title}
            </h3>
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mt-2">
              {education.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
