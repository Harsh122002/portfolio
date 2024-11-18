import React from 'react';
import { Projects } from '../untils/SkillsFunction';

export default function Portfolio() {
  return (
    <div className="bg-zinc-700 min-h-screen flex flex-col items-center pt-32">
      {/* Skills Title */}
      <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold mb-28 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Portfolio
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 mb-20">
        {Projects.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Skill Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 mb-2">
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="w-full h-full object-contain rounded-full border-2 border-gray-300"
              />
            </div>
            {/* Skill Name */}
            <p className="text-center text-sm sm:text-base font-semibold text-white">
              {skill.name}
            </p>
            <p className="text-center text-sm sm:text-base font-semibold text-white">
              {skill.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
