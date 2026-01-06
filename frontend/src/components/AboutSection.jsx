import React from 'react';
import { about } from '../mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
