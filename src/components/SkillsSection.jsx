import React from 'react';
import { skills } from '../mock';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 grid-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-slate-800/50 border border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800 transition-all cursor-default backdrop-blur-sm glow-on-hover"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
